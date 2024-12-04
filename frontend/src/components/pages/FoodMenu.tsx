"use client";
import { useEffect, useState } from "react";
import { HeaderPart } from "../Header";
import { Footer } from "./Footer";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ItemCard from "../ItemCard";
import { FoodModal } from "../card/Food";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
};

type Category = {
  _id: string;
  name: string;
  foodId: string;
};

type CartItem = {
  food: Food;
  quantity: number;
};

type FoodResponse = {
  success: boolean;
  data: Food[];
};

type CategoryResponse = {
  success: boolean;
  data: Category[];
};

export const FoodMenuua = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalData, setModalData] = useState<Food | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New cart-related states
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleFoodClick = (food: Food) => {
    setModalData(food);
    setIsModalOpen(true);
  };

  // New cart-related functions
  const addToCart = (food: Food, quantity: number) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.food._id === food._id
    );

    let updatedCartItems: CartItem[];
    if (existingCartItemIndex > -1) {
      // If item exists, update its quantity
      updatedCartItems = cartItems.map((item, index) =>
        index === existingCartItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // If item doesn't exist, add new cart item
      updatedCartItems = [...cartItems, { food, quantity }];
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const fetchDataFood = async () => {
    try {
      const response = await fetch(
        "https://sengedorj-food-delivery-3.onrender.com/api/foods"
      );
      const data: FoodResponse = await response.json();
      setFoodData(data.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  const fetchDataCategory = async () => {
    try {
      const response = await fetch(
        "https://sengedorj-food-delivery-3.onrender.com/api/categories"
      );
      const data: CategoryResponse = await response.json();
      setCategoryData(data.data);
      if (data.data.length > 0) {
        setActiveCategory(data.data[0].name);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchDataFood(), fetchDataCategory()]);
      setIsLoading(false);
    };
    fetchData();

    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const filteredFoodData =
    activeCategory && categoryData.length > 0
      ? foodData.filter((food) =>
          categoryData.some(
            (category) =>
              category.name === activeCategory && category.foodId === food._id
          )
        )
      : foodData;

  return (
    <div>
      <HeaderPart />
      <div className="container m-auto  pb-[40px]">
        <Stack direction="row" spacing={2}>
          {categoryData.map((category) => (
            <Button
              key={category._id}
              variant={
                activeCategory === category.name ? "contained" : "outlined"
              }
              onClick={() => handleCategoryClick(category.name)}
              className="w-[25%]"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "12px",
                padding: "10px 16px",
                transition: "all 0.3s ease",
                "&.MuiButton-contained": {
                  backgroundColor: "#2ecc71",
                  color: "white",
                  boxShadow: "0 4px 6px rgba(46, 204, 113, 0.3)",
                  "&:hover": {
                    backgroundColor: "#27ae60",
                    boxShadow: "0 6px 8px rgba(46, 204, 113, 0.4)",
                  },
                },
                "&.MuiButton-outlined": {
                  borderColor: "#2ecc71",
                  color: "#2ecc71",
                  "&:hover": {
                    backgroundColor: "rgba(46, 204, 113, 0.1)",
                    borderColor: "#27ae60",
                  },
                },
              }}
            >
              {category.name}
            </Button>
          ))}
        </Stack>
      </div>
      <div className="container m-auto grid grid-cols-5 min-h-[50vh] gap-[10px] flex-wrap">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <ItemCard key={index} isLoading={true} />
            ))
          : foodData.length > 0
          ? foodData.map((food) => (
              <div
                key={food._id}
                role="button"
                onClick={() => handleFoodClick(food)}
              >
                <ItemCard
                  name={food.name}
                  price={food.price}
                  imageUrl={food.image}
                />
              </div>
            ))
          : "No food items available for the selected category."}
      </div>
      {modalData && (
        <FoodModal
          img={modalData.image}
          text={modalData.name}
          amount={modalData.price}
          ingredients={modalData.ingredients}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddToCart={(quantity) => addToCart(modalData, quantity)}
        />
      )}
      <Footer />
    </div>
  );
};

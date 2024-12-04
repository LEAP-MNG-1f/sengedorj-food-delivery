import * as React from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";

type CartItem = {
  food: {
    _id: string;
    name: string;
    price: number;
    image: string;
    ingredient: string;
  };
  quantity: number;
};

type CartProps = {
  cartItems: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (foodId: string) => void;
  onUpdateQuantity: (foodId: string, quantity: number) => void;
};

const Cart: React.FC<CartProps> = ({
  cartItems,
  isOpen,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.food.price * item.quantity,
      0
    );
  };

  const handleIncreaseQuantity = (foodId: string) => {
    const updatedQuantity =
      cartItems.find((item) => item.food._id === foodId)!.quantity + 1;
    onUpdateQuantity(foodId, updatedQuantity);
  };

  const handleDecreaseQuantity = (foodId: string) => {
    const updatedQuantity =
      cartItems.find((item) => item.food._id === foodId)!.quantity - 1;
    if (updatedQuantity > 0) {
      onUpdateQuantity(foodId, updatedQuantity);
    }
  };

  const handleOrder = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{ sx: { width: 400, padding: 2 } }}
    >
      <Box role="presentation">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Таны сагс</h2>
          <IconButton onClick={onClose} aria-label="close cart">
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />

        {cartItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Таны сагс хоосон байна
          </div>
        ) : (
          <>
            <List>
              {cartItems.map((item) => (
                <ListItem
                  key={item.food._id}
                  className="flex items-center space-x-4 py-2"
                >
                  <img
                    src={item.food.image}
                    alt={item.food.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.food.name}</h3>
                    <p className="text-xs text-gray-500">
                      {item.food.ingredient}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => handleDecreaseQuantity(item.food._id)}
                        className="p-1 rounded-full border"
                      >
                        <RemoveIcon fontSize="small" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(item.food._id)}
                        className="p-1 rounded-full border"
                      >
                        <AddIcon fontSize="small" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {item.food.price * item.quantity}₮
                  </div>
                  <IconButton
                    onClick={() => onRemoveItem(item.food._id)}
                    aria-label="remove item"
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>

            <Divider />

            <div className="flex justify-between items-center py-4">
              <span className="text-lg font-semibold text-gray-700">Нийт:</span>
              <span className="text-lg font-semibold">{calculateTotal()}₮</span>
            </div>
          </>
        )}
      </Box>
      <Link href={"/order"}>
        <button onClick={handleOrder}>Zahialah</button>
      </Link>
    </Drawer>
  );
};

export default Cart;

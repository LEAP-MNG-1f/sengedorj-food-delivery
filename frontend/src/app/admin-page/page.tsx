"use client";
import React, { useState } from "react";
import { HeaderPart } from "@/components/Header";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Page() {
  const [categories, setCategories] = useState([
    "Breakfast",
    "Soup",
    "Main Course",
    "Dessert",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleCategoryDialogOpen = () => setOpenCategoryDialog(true);
  const handleCategoryDialogClose = () => {
    setOpenCategoryDialog(false);
    setNewCategory("");
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      handleCategoryDialogClose();
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-[#F4F6F8] min-h-screen">
      <HeaderPart />
      <div className="container mx-auto pt-[80px] flex">
        {/* Sidebar */}
        <aside className="w-[300px] bg-white rounded-3xl shadow-lg p-6 border border-gray-200">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Food Menu
          </h1>
          <div className="space-y-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(category)}
                className={`w-full text-left text-lg py-3 px-5 rounded-xl transition duration-200 ease-in-out border ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-800 hover:bg-green-100 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="pt-[30px]">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleCategoryDialogOpen}
              className=" rounded-lg text-white bg-white hover:bg-grey"
            >
              Create New Category
            </Button>
          </div>
        </aside>

        <main className="flex-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-700">
              {selectedCategory}
            </h1>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="bg-green-500 hover:bg-green-500"
            >
              Add New Food
            </Button>
          </div>
          <div className="text-center text-gray-500">
            <p>Уучлаарай, Таны меню хоосон байна.</p>
          </div>
        </main>
      </div>

      <Dialog
        open={openCategoryDialog}
        onClose={handleCategoryDialogClose}
        aria-labelledby="category-dialog-title"
        fullWidth
        maxWidth="sm"
        className=" pt-[30px]"
      >
        <DialogTitle id="category-dialog-title" className="text-gray-700">
          Create New Category
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="bg-gray-50"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCategoryDialogClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddCategory}
            color="primary"
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

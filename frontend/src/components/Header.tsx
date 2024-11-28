import * as React from "react";
import { PineIcon } from "./icons/Pinecone";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

const navigationItems = [
  { label: "НҮҮР", path: "/" },
  { label: "ХООЛНЫ ЦЭС", path: "/food-menu" },
  { label: "ХҮРГЭЛТИЙН БҮС", path: "/order" },
];

export const HeaderPart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCart = React.useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsCartOpen(open);
    },
    []
  );

  const cartContent = () => (
    <Box role="presentation" className="w-80">
      <div className="p-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Таны сагс</h2>
        <IconButton
          onClick={toggleCart(false)}
          className="rounded-full hover:bg-gray-100 transition-all duration-300"
          aria-label="close cart"
        >
          <CloseIcon className="text-gray-600" />
        </IconButton>
      </div>
      <Divider className="opacity-50" />
      <List>
        <ListItem>
          <ListItemText
            primary="Таны сагс хоосон байна"
            className="text-gray-500 text-center py-8"
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="transition-transform duration-300 hover:scale-105">
              <Link href="admin-page" className="block">
                <PineIcon />
              </Link>
            </div>

            <nav className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="relative font-medium text-gray-800 hover:text-black transition-colors duration-300 group py-2"
                  aria-label={item.label}
                >
                  <span className="text-sm tracking-wide">{item.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-8">
            <div className="relative w-[300px] group">
              <input
                type="search"
                className="w-full px-4 py-2.5 rounded-full border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300 outline-none text-sm"
                placeholder="Хайх..."
                aria-label="Search"
              />
              <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
            </div>

            <button
              onClick={toggleCart(true)}
              className="flex items-center space-x-2 group py-2 px-3 rounded-full hover:bg-gray-50 transition-all duration-300"
              aria-expanded={isCartOpen}
              aria-label="Open cart"
            >
              <ShoppingCartIcon className="text-gray-800 group-hover:text-black transition-colors duration-300" />
              <span className="font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300">
                Сагс
              </span>
            </button>

            <Link
              href="/login"
              className="flex items-center space-x-2 group py-2 px-3 rounded-full hover:bg-gray-50 transition-all duration-300"
              aria-label="Profile"
            >
              <PersonIcon className="text-gray-800 group-hover:text-black transition-colors duration-300" />
              <span className="font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300">
                Нэвтрэх
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={toggleCart(false)}
        className="transition-transform duration-300"
      >
        {cartContent()}
      </Drawer>
    </header>
  );
};

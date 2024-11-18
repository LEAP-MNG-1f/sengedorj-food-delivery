// import * as React from "react";
// import { PineIcon } from "./icons/Pinecone";
// import { SameText } from "./text/text";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PersonIcon from "@mui/icons-material/Person";
// import Drawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";

// export const HeaderPart = () => {
//   const [isCartOpen, setIsCartOpen] = React.useState(false);

//   const toggleCart =
//     (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === "keydown" &&
//         ((event as React.KeyboardEvent).key === "Tab" ||
//           (event as React.KeyboardEvent).key === "Shift")
//       ) {
//         return;
//       }
//       setIsCartOpen(open);
//     };

//   const cartContent = () => (
//     <Box
//       sx={{ width: 300 }}
//       role="presentation"
//       onClick={toggleCart(false)}
//       onKeyDown={toggleCart(false)}
//     >
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-4">Таны сагс</h2>
//       </div>
//       <Divider />
//       <List>
//         <ListItem>
//           <ListItemText primary="Таны сагс хоосон байна" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <div className="container m-auto pt-[50px] flex">
//         <div className="flex w-[50%] justify-between items-center pr-[100px]">
//           <PineIcon />
//           <SameText name={"НҮҮР"} />
//           <SameText name={"ХООЛНЫ ЦЭС"} />
//           <SameText name={"ХҮРГЭЛТИЙН БҮС"} />
//         </div>
//         <div className="w-[50%] flex justify-between pl-[100px] items-center pr-[40px]">
//           <input
//             type="search"
//             className="border w-[300px] px-3 py-2 rounded-md"
//             placeholder="Хайх..."
//           />
//           <div
//             className="flex gap-[5px] items-center cursor-pointer hover:text-gray-600 transition-colors"
//             onClick={toggleCart(true)}
//           >
//             <ShoppingCartIcon />
//             <SameText name={"сагс"} />
//           </div>
//           <div className="flex items-center cursor-pointer hover:text-gray-600 transition-colors">
//             <PersonIcon />
//             <SameText name={"Нэвтрэх"} />
//           </div>
//         </div>
//       </div>

//       <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
//         {cartContent()}
//       </Drawer>
//     </>
//   );
// };
import * as React from "react";
import { PineIcon } from "./icons/Pinecone";
import { SameText } from "./text/text";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

export const HeaderPart = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const toggleCart =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsCartOpen(open);
    };

  const cartContent = () => (
    <Box sx={{ width: 300 }} role="presentation">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Таны сагс</h2>
        <IconButton
          onClick={toggleCart(false)}
          className="hover:bg-gray-100 transition-colors"
          aria-label="close cart"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Таны сагс хоосон байна" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div className="container m-auto py-[20px] flex">
        <div className="flex w-[50%] justify-between items-center pr-[100px]">
          <PineIcon />
          <SameText name={"НҮҮР"} />
          <SameText name={"ХООЛНЫ ЦЭС"} />
          <SameText name={"ХҮРГЭЛТИЙН БҮС"} />
        </div>
        <div className="w-[50%] flex justify-between pl-[100px] items-center pr-[40px]">
          <input
            type="search"
            className="border w-[300px] px-3 py-2 rounded-md"
            placeholder="Хайх..."
          />
          <div
            className="flex gap-[5px] items-center cursor-pointer hover:text-gray-600 transition-colors"
            onClick={toggleCart(true)}
          >
            <ShoppingCartIcon />
            <SameText name={"сагс"} />
          </div>
          <div className="flex items-center cursor-pointer hover:text-gray-600 transition-colors">
            <PersonIcon />
            <SameText name={"Нэвтрэх"} />
          </div>
        </div>
      </div>

      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart(false)}>
        {cartContent()}
      </Drawer>
    </>
  );
};

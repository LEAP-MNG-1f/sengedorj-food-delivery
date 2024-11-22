"use client";
import { HeaderPart } from "@/components/Header";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function page() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <HeaderPart />
      <div className="container mx-auto pt-[75px] flex">
        <div className="w-[30%] bg-white h-[94vh] flex flex-col pl-[100px] pr-[24px]">
          <h1 className="font-[600] text-[24px] pt-[26px]">Food Menu</h1>
          <div className=" flex flex-col gap-[20px] pr-[24px] pt-[40px]">
            <button className="btn btn-outline btn-success">Breakfast</button>
            <button className="btn btn-outline btn-success">Soup</button>
            <button className="btn btn-outline btn-success">Main course</button>
            <button className="btn btn-outline btn-success">Dessert</button>
          </div>
          <div className="pt-[20px] w-full">
            <React.Fragment>
              <Button variant="outlined" onClick={handleClickOpen}>
                create new category
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={handleClose} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </div>
        </div>
        <div className="w-[65%] bg-[#F7F7F8] h-[94vh]">
          <div className="flex justify-between px-[30px] pt-[40px]">
            <h1 className="font-[600] text-[23px]">Breakfast</h1>
            <button className="btn btn-success text-white">Add new food</button>
          </div>
        </div>
      </div>
    </div>
  );
}

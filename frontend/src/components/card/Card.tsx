import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type ActionAreaCardProps = {
  icons?: React.ReactNode;
  text?: string;
};

export default function ActionAreaCard({ icons, text }: ActionAreaCardProps) {
  return (
    <div className="pt-[100px] pb-[100px]">
      <Card sx={{ width: "328px", height: "150px", borderRadius: "20px" }}>
        <CardActionArea>
          <CardMedia />
          <div>{icons}</div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h1 className="font-[600]">{text}</h1>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Захиалга бэлтгэлийн явцыг хянах
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

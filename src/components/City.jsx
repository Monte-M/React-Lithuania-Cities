import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";

function City({ city, about, image }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {about}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default City;

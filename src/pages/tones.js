import React, { useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import {
  Gradient,
  RadialGradient,
  PolkaDots,
  Checkerboard,
  DiagonalLines,
  Crosshatch,
  HorizontalStripes,
  VerticalStripes,
  Stars,
} from "../components/Tones";

const colors = ["red", "blue", "green", "orange", "purple", "pink"];
const TonesPage = () => {
  const [primaryColor, setPrimaryColor] = useState("black");
  const [secondaryColor, setSecondaryColor] = useState("white");

  const changeColors = () => {
    const primaryIndex = Math.floor(Math.random() * colors.length);
    const diff = Math.floor(1 + Math.random() * (colors.length - 2));
    const secondaryIndex = (primaryIndex + diff) % colors.length;
    const randomPrimaryColor = colors[primaryIndex];
    const randomSecondaryColor = colors[secondaryIndex];
    setPrimaryColor(randomPrimaryColor);
    setSecondaryColor(randomSecondaryColor);
  };

  return (
    <Container
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <NavigationBar />
      <Grid container spacing={0} sx={{ height: "200", width: "200" }}>
        <Grid item xs={2}>
          {Gradient([primaryColor, secondaryColor])}
        </Grid>
        <Grid item xs={2}>
          {RadialGradient([primaryColor, secondaryColor])}
        </Grid>
        <Grid item xs={2}>
          {PolkaDots(primaryColor)}
        </Grid>
        <Grid item xs={2}>
          {Checkerboard(primaryColor)}
        </Grid>
        <Grid item xs={2}>
          {DiagonalLines(primaryColor)}
        </Grid>
        <Grid item xs={2}>
          {Crosshatch(primaryColor)}
        </Grid>
        <Grid item xs={2}>
          {HorizontalStripes(primaryColor)}
        </Grid>
        <Grid item xs={2}>
          {VerticalStripes(primaryColor)}
        </Grid>
        <Grid item xs={2}>
          {Stars(primaryColor)}
        </Grid>
      </Grid>
      <Button sx={{ mt: 5 }} onClick={changeColors}>
        Change Colors
      </Button>
    </Container>
  );
};

export default TonesPage;

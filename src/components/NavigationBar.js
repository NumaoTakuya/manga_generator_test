// components/NavigationBar.js
import React from "react";
import { useRouter } from "next/router";
import { AppBar, Toolbar, Button } from "@mui/material";

const NavigationBar = () => {
  const router = useRouter();

  const handleMainButtonClick = () => {
    router.push("/");
  };

  const handleBubblesButtonClick = () => {
    router.push("/bubbles");
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button color="inherit" onClick={handleMainButtonClick}>
          Main
        </Button>
        <Button color="inherit" onClick={handleBubblesButtonClick}>
          Bubbles
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

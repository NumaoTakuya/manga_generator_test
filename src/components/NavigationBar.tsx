import React from "react";
import { useRouter } from "next/router";
import { AppBar, Stack, Button } from "@mui/material";

const NavigationBar = (): JSX.Element => {
  const router = useRouter();

  const handleDetectionButtonClick = () => {
    router.push("/");
  };

  const handleBubblesButtonClick = () => {
    router.push("/bubblesPage");
  };

  const handleFrameButtonClick = () => {
    router.push("/framePage");
  };

  const handleOnomatopoeiaButtonClick = () => {
    router.push("/onomatopoeiaPage");
  };

  const handleTonesButtonClick = () => {
    router.push("/tonesPage");
  };

  const handlePanelButtonClick = () => {
    router.push("/panelPage");
  };

  return (
    <AppBar position="fixed">
      <Stack direction="row" spacing={5} sx={{ p: 2 }}>
        <Button color="inherit" onClick={handleDetectionButtonClick}>
          Detection
        </Button>
        <Button color="inherit" onClick={handleBubblesButtonClick}>
          Bubbles
        </Button>
        <Button color="inherit" onClick={handleFrameButtonClick}>
          Frame
        </Button>
        <Button color="inherit" onClick={handleOnomatopoeiaButtonClick}>
          Onomatopoeia
        </Button>
        <Button color="inherit" onClick={handleTonesButtonClick}>
          Tones
        </Button>
        <Button color="inherit" onClick={handlePanelButtonClick}>
          Panel
        </Button>
      </Stack>
    </AppBar>
  );
};

export default NavigationBar;
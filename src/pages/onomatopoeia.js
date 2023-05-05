import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import NavigationBar from "../components/NavigationBar";
import OnomatopoeiaText from "../components/OnomatopoeiaText";
import { getRandomFromArray, getRandomColor, getRandomInt } from "../utils/getRandom";
 
const onomatopoeias = [
  "Bam!",
  "Pow!",
  "Wham!",
  "Crash!",
  "Boom!",
  "Snap!",
  "Zap!",
  "Zing!",
  "Sizzle!",
  "Pop!",
  "Blam!",
  "Thwack!",
  "Bang!",
  "Crunch!",
  "Smash!",
  "Kapow!",
  "Kaboom!",
  "Biff!",
  "Bop!",
  "Clang!",
  "Ping!",
  "Plop!",
  "Splat!",
  "Swoosh!",
  "Thunk!",
  "Tick-tock!",
  "Whack!",
  "Zoom!",
  "Hiss!",
];

const fonts = [
  "Arial",
  "Comic Sans MS",
  "Verdana",
  "Georgia",
  "Tahoma",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Impact",
  "Lucida Console",
  "Century Gothic",
  "Garamond",
  "Palatino",
  "Bookman",
  "Avant Garde",
  "Candara",
  "Calibri",
  "Consolas",
  "Segoe UI",
  "Trebuchet MS",
  "Franklin Gothic Medium",
  "Rockwell",
  "Cambria",
  "Constantia",
  "Corbel",
  "Perpetua",
  "Ebrima",
  "Gabriola",
  "Segoe Print",
  "Brush Script MT",
]; 

const OnomatopoeiaPage = () => {
  const [onomatopoeiaProps, setOnomatopoeiaProps] = useState({});

  const handleButtonClick = () => {
    const newOnomatopoeiaProps = {
      content: getRandomFromArray(onomatopoeias),
      font: getRandomFromArray(fonts),
      color: getRandomColor(),
      position: { x: getRandomInt(400, 600), y: getRandomInt(300, 400) },
      size: getRandomInt(72, 200),
      rotation: getRandomInt(-30, 30),
    };
    setOnomatopoeiaProps(newOnomatopoeiaProps);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavigationBar />
      <Button onClick={handleButtonClick} sx={{ mt: 10 }}>
        Generate Onomatopoeia
      </Button>
      <OnomatopoeiaText {...onomatopoeiaProps} />
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};

export default OnomatopoeiaPage;

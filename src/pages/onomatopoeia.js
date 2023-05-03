import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import NavigationBar from "../components/NavigationBar";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
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

const getRandomFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomColor = () => {
  return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(
    0,
    255
  )})`;
};

const OnomatopoeiaPage = () => {
  const [onomatopoeiaStyle, setOnomatopoeiaStyle] = useState({});

  const handleButtonClick = () => {
    const newOnomatopoeiaStyle = {
      fontFamily: getRandomFromArray(fonts),
      fontSize: `${getRandomInt(72, 200)}px`,
      color: getRandomColor(),
      transform: `rotate(${getRandomInt(-30, 30)}deg)`,
    };
    setOnomatopoeiaStyle(newOnomatopoeiaStyle);
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
      <Box
        component="span"
        sx={{
          ...onomatopoeiaStyle,
          userSelect: "none",
          textAlign: "center",
          mt: 20,
        }}
      >
        {getRandomFromArray(onomatopoeias)}
      </Box>
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
};

export default OnomatopoeiaPage;

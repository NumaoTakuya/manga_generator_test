import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import NavigationBar from "../components/NavigationBar";
import OnomatopoeiaText from "../components/OnomatopoeiaText";
import {
  getRandomFromArray,
  getRandomColor,
  getRandomInt,
} from "../utils/getRandom";
import {
  onomatopoeias,
  fonts,
} from "../utils/Onomatopoeia/OnomatopoeiaAttributes";
import OnomatopoeiaTextProps from "@/utils/Onomatopoeia/OnomatopoeiaTextProps";

const OnomatopoeiaPage = () => {
  const [onomatopoeiaProps, setOnomatopoeiaProps] = useState<OnomatopoeiaTextProps>(
    {} as OnomatopoeiaTextProps
  );

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
        backgroundColor: "#fff",
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

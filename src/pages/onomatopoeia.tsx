import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import NavigationBar from "../components/NavigationBar";
import OnomatopoeiaText from "../components/Onomatopoeia/OnomatopoeiaText";
import Point from "../utils/classes/Point";
import OnomatopoeiaTextProps from "@/utils/Onomatopoeia/OnomatopoeiaTextProps";
import { OnomatopoeiaData } from "@/utils/DataModels/MangaDataModel";

const OnomatopoeiaPage = () => {
  const [onomatopoeiaProps, setOnomatopoeiaProps] =
    useState<OnomatopoeiaTextProps>({} as OnomatopoeiaTextProps);

  const handleButtonClick = () => {
    const newOnomatopoeiaProps: OnomatopoeiaData = {
      content: "Hello",
      position: new Point(200, 200),
      rotation: 45,
      color: "#FF0000",
      fontSize: 20,
      font: "Arial",
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

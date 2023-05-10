import React from "react";
import { Container } from "@mui/material";
import Panel from "../components/Panel/Panel";
import NavigationBar from "../components/NavigationBar";
import { PanelData } from "@/utils/DataModels/MangaDataModel";
import Point from "@/utils/classes/Point"; 
import CenteredRect from "@/utils/classes/CenteredRect";

const PanelPage: React.FC = () => {
  // Create an example panelData
  const panelData: PanelData = {
    image: {
      src: "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060",
      frameRect: {
        cropRandomness: new Point(0.1, 0.3),
        centeredRect: new CenteredRect(500, 600, 300, 353),
      },
    },
    tone: {
      style: "horizontalGradient",
      primaryColor: "#FFFFFF",
      secondaryColor: "#000000",
      centeredRect: new CenteredRect(500, 600, 500, 300),
    },
    bubbles: [
      {
        style: "ellipse", 
        aspectRatio: 2,
        fontSize: 16,
        content: "Hello World",
      },
    ],
    onomatopoeias: [
      {
        content: "BOOM",
        position: new Point(600, 600),
        rotation: 0,
        color: "#FF0000",
        fontSize: 32,
        font: "Arial",
      },
    ],
  };

  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <NavigationBar /> */}
      <Panel panelData={panelData} />
    </Container>
  );
};

export default PanelPage;

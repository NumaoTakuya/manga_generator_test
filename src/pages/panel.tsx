// MangaDataModel.Panel -> PanelPage

import React from "react";
import { Container } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import Layer from "../components/Layer"; 
import useCropImage from "../utils/hooks/useCropImage";
import useMouthPosition from "../utils/hooks/useMouthPosition";
import useBubble from "../utils/hooks/useBubble";
import useTone from "../utils/hooks/useTone";
import useOnomatopoeia from "../utils/hooks/useOnomatopoeia"; 
import CenteredRect from "@/utils/classes/CenteredRect";
import CalculateImageAR from "@/utils/CalculateImageAR"; 
import Point from "@/utils/classes/Point";
import "@/utils/Extensions/randomElem" 

const sources = [
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060",
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102982059930161152/7f9e577686ec2e1e0700ff61232e208d.jpg?width=776&height=1060",
  "https://media.discordapp.net/attachments/1058796281146908762/1102982726287626270/00004-659911599.png?width=1024&height=1024",
  "https://media.discordapp.net/attachments/1061113259979178044/1102984309448646667/Screenshot_2023-05-02_at_12-19-44_Down_To_Earth_-_Episode_1.png?width=730&height=780",
];

const PanelPage = () => { 

  //Image
  const src = sources[0];
  const imageId = `image-${0}`;
  const imageWidth = 300;
  const cropRandomness = new Point(0.1, 0.3); 
  const ar = CalculateImageAR(src) ?? 2;
  const imageHeight = imageWidth * ar;
  const panelCenteredRect = new CenteredRect(600, 300, imageWidth, imageHeight);
  const { RenderCropImage } = useCropImage(src, imageId, cropRandomness, panelCenteredRect);

  // Detection
  const { modelsLoaded, mouthPosition } = useMouthPosition(imageId, imageWidth);   

  // Bubble
  const { RenderBubbles } = useBubble(modelsLoaded, mouthPosition);

  // Tones
  const { selectedTone } = useTone();

  // Onomatopoeia 
  const { RenderOnomatopoeia } = useOnomatopoeia(mouthPosition);

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
      <Layer zIndex={0}>{selectedTone}</Layer>
      <Layer zIndex={1}>{RenderOnomatopoeia}</Layer>
      <Layer zIndex={2}>{RenderCropImage}</Layer>
      <Layer zIndex={3}>{RenderBubbles}</Layer>
    </Container>
  );
};

export default PanelPage;

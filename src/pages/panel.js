import React from "react";
import { Container, TextField, Button } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import Layer from "../components/Layer"; 
import useCropImage from "../utils/hooks/useCropImage";
import useMouthPosition from "../utils/hooks/useMouthPosition";
import useBubble from "../utils/hooks/useBubble";
import useTone from "../utils/hooks/useTone";
import useOnomatopoeia from "../utils/hooks/useOnomatopoeia";

const PanelPage = () => {
  //Image
  const src =
    "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060";
  const imageId = "image-0";
  const width = 300;
  const cropRandomness = { x: 0.1, y: 0.3 };
  const { RenderCropImage } = useCropImage(src, imageId, width, cropRandomness);

  // Detection
  const { modelsLoaded, mouthPosition } = useMouthPosition(imageId); 

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
      <Layer zIndex={1}>{RenderCropImage}</Layer>
      <Layer zIndex={2}>{RenderOnomatopoeia}</Layer>
      <Layer zIndex={3}>{RenderBubbles}</Layer>
    </Container>
  );
};

export default PanelPage;

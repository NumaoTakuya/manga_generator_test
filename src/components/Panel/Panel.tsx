import React from "react";
import { PanelData } from "@/utils/DataModels/MangaDataModel";
import useCropImage from "../../utils/hooks/useCropImage";
import useMouthPosition from "../../utils/hooks/useMouthPosition";
import useBubble from "../../utils/hooks/useBubble";
import useTone from "../../utils/hooks/useTone";
import useOnomatopoeia from "../../utils/hooks/useOnomatopoeia";
import Layer from "./Layer";
import { Container } from "@mui/material";

interface PanelProps {
  panelData: PanelData;
}

const Panel: React.FC<PanelProps> = ({ panelData }) => {
  // Image
  const image = panelData.image;
  const src = image.src ?? "NO IMAGE";
  const imageId = `image-${src}`;

  const { RenderCropImage } = useCropImage(src, imageId, image.frameRect);

  // Detection
  const { modelsLoaded, mouthPosition } = useMouthPosition(
    imageId,
    image.frameRect.centeredRect.width
  );
  console.log("mouthPosition", mouthPosition);

  // Bubble
  const { RenderBubbles } = useBubble(
    panelData.bubbles,
    modelsLoaded,
    mouthPosition
  );

  // Tones
  const { RenderTone } = useTone(panelData.tone);

  // Onomatopoeia
  const { RenderOnomatopoeia } = useOnomatopoeia(
    mouthPosition,
    panelData.onomatopoeias
  );

  return (
    <Container
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Layer zIndex={0}>{RenderTone}</Layer>
      <Layer zIndex={1}>{RenderCropImage}</Layer>
      <Layer zIndex={2}>{RenderBubbles}</Layer>
      <Layer zIndex={3}>{RenderOnomatopoeia}</Layer>
    </Container>
  );
};

export default Panel;

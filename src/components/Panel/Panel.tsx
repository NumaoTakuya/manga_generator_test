import React from "react";
import { Container } from "@mui/material";
import { PanelData } from "@/utils/DataModels/MangaDataModel";
import useCropImage from "../../utils/hooks/useCropImage";
import useMouthPosition from "../../utils/hooks/useMouthPosition";
import useBubble from "../../utils/hooks/useBubble";
import useTone from "../../utils/hooks/useTone";
import useOnomatopoeia from "../../utils/hooks/useOnomatopoeia";
import Layer from "./Layer";
import Rect from "@/utils/classes/Rect";

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
  const imageCenteredRect = image.frameRect.centeredRect;
  const imageRect = new Rect(
    imageCenteredRect.centerX - imageCenteredRect.width / 2,
    imageCenteredRect.centerY - imageCenteredRect.height / 2,
    imageCenteredRect.width,
    imageCenteredRect.height
  );
  const { modelsLoaded, mouthPosition } = useMouthPosition(imageId, imageRect);

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
      <Layer zIndex={10}>{RenderCropImage}</Layer>
      <Layer zIndex={20}>{RenderBubbles}</Layer>
      <Layer zIndex={30}>{RenderOnomatopoeia}</Layer>
    </Container>
  );
};

export default Panel;

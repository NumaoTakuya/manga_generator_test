import React from "react";
import Bubble from "../../components/Bubble/Bubble";
import { BubbleData } from "../DataModels/MangaDataModel";
import Point from "../classes/Point";

interface UseBubbleResult {
  RenderBubbles: JSX.Element | null;
}

const useBubble = (
  bubbleDataArray: BubbleData[],
  modelsLoaded: boolean,
  mouthPosition: Point | null
): UseBubbleResult => { 
  const bubbles = bubbleDataArray.map(
    (bubbleData, index) =>
      modelsLoaded && (
        <Bubble
          key={index}
          text={bubbleData.content}
          style={bubbleData.style}
          aspectRatio={bubbleData.aspectRatio}
          position={bubbleData.position}
          targetPosition={mouthPosition}
          fontSize={bubbleData.fontSize ?? 20}
          font={bubbleData.font}
        />
      )
  );

  const RenderBubbles = <>{bubbles}</>;

  return { RenderBubbles };
};

export default useBubble;

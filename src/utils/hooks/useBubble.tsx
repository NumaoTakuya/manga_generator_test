import React from "react";
import Bubble from "../../components/Bubble/Bubble";
import { BubbleData } from "../DataModels/MangaDataModel";
import Point from "../classes/Point";

interface UseBubbleResult {
  RenderBubbles: React.ReactNode[];
}

// TODO: 座標とサイズを自動的に決定する
const useBubble = (
  bubbleDataArray: BubbleData[],
  modelsLoaded: boolean,
  mouthPosition: Point
): UseBubbleResult => {
  const RenderBubbles = bubbleDataArray.map((bubbleData, index) => (
    <div
      key={index} 
    >
      {modelsLoaded && (
        <Bubble
          key={index}
          text={bubbleData.content}
          style={bubbleData.style}
          aspectRatio={bubbleData.aspectRatio}
          position={mouthPosition.add(new Point(300, 0))} //この部分をグローバル変数を用いて計算
          targetPosition={mouthPosition}
          fontSize={bubbleData.fontSize ?? 20}
        />
      )}
    </div>
  ));

  return { RenderBubbles };
};

export default useBubble;

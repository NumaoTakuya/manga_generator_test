import React from "react";
import Bubble from "../../components/Bubble/Bubble";
import { BubbleData } from "../DataModels/MangaDataModel";
import Point from "../classes/Point";

interface UseBubbleResult {
  RenderBubbles: JSX.Element | null;
}

// TODO: 座標とサイズを自動的に決定する
const useBubble = (
  bubbleDataArray: BubbleData[],
  modelsLoaded: boolean,
  mouthPosition: Point | null
): UseBubbleResult => {
  const position = mouthPosition?.add(new Point(300, 0)) ?? new Point(500, 550); //この部分をグローバル変数を用いて計算
  const bubbles = bubbleDataArray.map((bubbleData, index) => (
    modelsLoaded && (
      <Bubble
        key={index}
        text={bubbleData.content}
        style={bubbleData.style}
        aspectRatio={bubbleData.aspectRatio}
        position={position}
        targetPosition={mouthPosition}
        fontSize={bubbleData.fontSize ?? 20}
        font={bubbleData.font}
      />
    )
  ));
  
  const RenderBubbles = <>{bubbles}</>;

  return { RenderBubbles };
};

export default useBubble;

import React from "react";
import Bubble from "../../components/Bubble";
import BubbleType from "../Bubble/BubbleType";
import Size from "../classes/Size";
import { getRandomPointOnUnitCircle } from "../getRandom";
import Point from "../classes/Point";

interface UseBubbleResult {
  RenderBubbles: React.ReactNode[];
}

const useBubble = (
  modelsLoaded: boolean,
  mouthPosition: Point
): UseBubbleResult => {
  const bubbleTypes: BubbleType[] = ["rounded", "square", "ellipse"];
  const r = Math.random() * Math.PI * 2;
  const r1 = getRandomPointOnUnitCircle(r);
  const r2 = getRandomPointOnUnitCircle(r + 2);
  const r3 = getRandomPointOnUnitCircle(r + 4);
  const bubbleRelativePositions = [
    r1.multiply(250),
    r2.multiply(250),
    r3.multiply(250),
  ];
  const bubbleSizes = [
    new Size(300, 400),
    new Size(400, 300),
    new Size(450, 300),
  ];
  const texts = [
    "Lately, I don't have time to read.",
    "I feel like going on a trip.",
    "It's nice weather today.",
  ];

  const RenderBubbles = Array(3)
    .fill(null)
    .map((_, index) => (
      <div key={index}>
        {modelsLoaded && (
          <Bubble
            key={index}
            text={texts[index]}
            type={bubbleTypes[index]}
            size={bubbleSizes[index]}
            position={mouthPosition.add(bubbleRelativePositions[index])}
            targetPosition={mouthPosition}
          />
        )}
      </div>
    ));

  return { RenderBubbles };
};

export default useBubble;

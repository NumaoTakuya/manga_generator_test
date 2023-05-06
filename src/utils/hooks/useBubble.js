import Bubble from "../../components/Bubble";
import Size from "../classes/Size";
import { getRandomPointOnUnitCircle } from "../getRandom";

const useBubble = (modelsLoaded, mouthPosition) => {
  const bubbleTypes = ["rounded", "square", "ellipse"];
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

  const RenderBubbles = () =>
    Array(3)
      .fill(null)
      .map((_, index) => (
        <div key={index}>
          {modelsLoaded && (
            <Bubble
              key={index}
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

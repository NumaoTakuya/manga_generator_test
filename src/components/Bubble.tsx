import React from "react";
import { useEffect, useReducer, useRef } from "react";
import RoundedBubble, { roundedBubbleTailPos } from "./Bubbles/RoundedBubble";
import SquareBubble, { squareBubbleTailPos } from "./Bubbles/SquareBubble";
import EllipseBubble, { ellipseBubbleTailPos } from "./Bubbles/EllipseBubble";
import Tail from "./Tail";
import BubbleProps from "@/utils/Bubble/BubbleProps";
import Point from "@/utils/classes/Point";
import Rect from "@/utils/classes/Rect";
import CenteredRect from "@/utils/classes/CenteredRect";
import useMousePosition from "@/utils/hooks/useMousePosition";

function calculateAngle(pos: Point) {
  return Math.atan2(pos.y, pos.x);
}

const Bubble: React.FC<BubbleProps> = ({ type, size, position }) => {
  const mousePosition = useMousePosition();

  // Absolute Position of this component
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Bubble
  const viewBoxSize = size;
  const bubbleSize = viewBoxSize.divide(2);
  const offset = bubbleSize.toPoint().divide(2).subtract(viewBoxSize.divide(2));
  const tailSize = bubbleSize.divide(4);
  const center = bubbleSize.toPoint().divide(2).add(offset);

  const initialState = {
    rotation: 0,
    tailPos: bubbleSize.add(offset.divide(2)),
  };

  const reducer = (state: any, action: { type: string }) => {
    switch (action.type) {
      case "UPDATE_POSITION":
        const rect =
          containerRef && containerRef.current
            ? containerRef.current.getBoundingClientRect()
            : Rect.ZERO;
        const absCenter = new Point(
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        );
        const angle = calculateAngle(absCenter);
        if (type === "square") {
          if (containerRef.current) {
            console.log("Absolute position:", absCenter.x, absCenter.y);
          }
          console.log(`Mouse position: ${mousePosition.x}, ${mousePosition.y}`);
          console.log(`Angle: ${angle}`);
        }
        let newTailX, newTailY;
        const cRect = new CenteredRect(
          center.x,
          center.y,
          bubbleSize.width,
          bubbleSize.height
        );

        switch (type) {
          case "rounded":
            ({ newTailX, newTailY } = roundedBubbleTailPos(cRect, angle));
            break;
          case "square":
            ({ newTailX, newTailY } = squareBubbleTailPos(cRect, angle));
            break;
          case "ellipse":
            ({ newTailX, newTailY } = ellipseBubbleTailPos(cRect, angle));
            break;
          default:
            return state;
        }
        return {
          rotation: (angle * 180) / Math.PI,
          tailPos: new Point(newTailX, newTailY),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "UPDATE_POSITION" });
  }, [mousePosition]);

  const points = {
    x1: state.tailPos.x - tailSize.width / 2,
    y1: state.tailPos.y - tailSize.height / 2,
    x2: state.tailPos.x + tailSize.width / 2,
    y2: state.tailPos.y,
    x3: state.tailPos.x - tailSize.width / 2,
    y3: state.tailPos.y + tailSize.height / 2,
  };

  const strokeWidth = 1; //TODO: typeによって分類
  const tail = <Tail points={points} state={state} strokeWidth={strokeWidth} />;

  const props = {
    offset,
    bubbleSize,
    strokeWidth,
    viewBoxSize,
    tail,
    containerRef,
  };

  const bubble = (type: string) => {
    switch (type) {
      case "rounded":
        return RoundedBubble(props);
      case "square":
        return SquareBubble(props);
      case "ellipse":
        return EllipseBubble(props);
      default:
        return RoundedBubble(props);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: position.x - bubbleSize.width / 2,
        top: position.y - bubbleSize.height / 2,
      }}
    >
      {bubble(type)}
    </div>
  );
};

export default Bubble;

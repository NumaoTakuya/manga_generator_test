import React from "react";
import { useEffect, useReducer, useState, useRef } from "react";
import RoundedBubble, { roundedBubbleTailPos } from "./Bubbles/RoundedBubble";
import SquareBubble, { squareBubbleTailPos } from "./Bubbles/SquareBubble";
import EllipseBubble, { ellipseBubbleTailPos } from "./Bubbles/EllipseBubble";
import Tail from "./Tail";
import BubbleType from "@/utils/Bubble/BubbleType";

function calculateAngle(x: number, y: number) {
  return Math.atan2(y, x);
}

const Bubble: React.FC<BubbleType> = ({ type }) => {
  // Mouse position
  const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return position;
  };

  const mousePosition = useMousePosition();

  // Absolute Position of this component
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Bubble
  const viewBoxWidth = 110;
  const viewBoxHeight = 60;
  const bubbleWidth = viewBoxWidth / 2;
  const bubbleHeight = viewBoxHeight / 2;
  const offsetX = viewBoxWidth / 2 - bubbleWidth / 2;
  const offsetY = viewBoxHeight / 2 - bubbleHeight / 2;
  const tailWidth = bubbleWidth / 4;
  const tailHeight = bubbleHeight / 4;
  const strokeWidth = 1;
  const centerX = bubbleWidth / 2 + offsetX;
  const centerY = bubbleHeight / 2 + offsetY;

  const initialState = {
    rotation: 0,
    tailX: bubbleWidth + offsetX / 2,
    tailY: bubbleHeight + offsetY / 2,
  };

  const reducer = (state: any, action: { type: string }) => {
    switch (action.type) {
      case "UPDATE_POSITION":
        const rect =
          containerRef && containerRef.current
            ? containerRef.current.getBoundingClientRect()
            : {
                left: 0,
                top: 0,
                width: 0,
                height: 0,
              };
        const absCenterX = rect.left + rect.width / 2;
        const absCenterY = rect.top + rect.height / 2;
        const angle = calculateAngle(
          mousePosition.x - absCenterX,
          mousePosition.y - absCenterY
        );
        if (type === "square") {
          if (containerRef.current) {
            console.log("Absolute position:", absCenterX, absCenterY);
          }
          console.log(`Mouse position: ${mousePosition.x}, ${mousePosition.y}`);
          console.log(`Angle: ${angle}`);
        }
        let newTailX, newTailY;

        switch (type) {
          case "rounded":
            ({ newTailX, newTailY } = roundedBubbleTailPos(
              centerX,
              centerY,
              bubbleWidth,
              bubbleHeight,
              angle
            ));
            break;
          case "square":
            ({ newTailX, newTailY } = squareBubbleTailPos(
              centerX,
              centerY,
              bubbleWidth,
              bubbleHeight,
              angle
            ));
            break;
          case "ellipse":
            ({ newTailX, newTailY } = ellipseBubbleTailPos(
              centerX,
              centerY,
              bubbleWidth,
              bubbleHeight,
              angle
            ));
            break;
          default:
            return state;
        }
        return {
          rotation: (angle * 180) / Math.PI,
          tailX: newTailX,
          tailY: newTailY,
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
    x1: state.tailX - tailWidth / 2,
    y1: state.tailY - tailHeight / 2,
    x2: state.tailX + tailWidth / 2,
    y2: state.tailY,
    x3: state.tailX - tailWidth / 2,
    y3: state.tailY + tailHeight / 2,
  };

  const tail = <Tail points={points} state={state} strokeWidth={strokeWidth} />;

  const props = {
    offsetX,
    offsetY,
    bubbleWidth,
    bubbleHeight,
    strokeWidth,
    viewBoxWidth,
    viewBoxHeight,
    tail,
    containerRef,
  };

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

export default Bubble;

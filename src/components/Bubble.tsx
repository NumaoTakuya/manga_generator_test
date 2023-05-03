import React from "react";
import { useEffect, useReducer } from "react";
import RoundedBubble, { roundedBubbleTailPos } from "./Bubbles/RoundedBubble";
import SquareBubble, { squareBubbleTailPos } from "./Bubbles/SquareBubble";
import EllipseBubble, { ellipseBubbleTailPos } from "./Bubbles/EllipseBubble";
import Tail from "./Tail";
import BubbleType from "@/utils/Bubble/BubbleType";

const Bubble: React.FC<BubbleType> = ({ type }) => {
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
        const angle = ((state.rotation + 1) * Math.PI) / 180;
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
          rotation: (state.rotation + 1) % 360,
          tailX: newTailX,
          tailY: newTailY,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "UPDATE_POSITION" });
    }, 20); // 連続的に回転させる
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  };

  switch (type) {
    case "rounded":
      return RoundedBubble(props);
    case "square":
      return SquareBubble(props);
    case "ellipse":
      return EllipseBubble(props);
    default:
      return null;
  }
};

export default Bubble;

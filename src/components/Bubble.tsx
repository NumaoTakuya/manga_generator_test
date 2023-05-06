import React from "react";
import { useEffect, useReducer } from "react";
import RoundedBubble, { roundedBubbleTailPos } from "./Bubbles/RoundedBubble";
import SquareBubble, { squareBubbleTailPos } from "./Bubbles/SquareBubble";
import EllipseBubble, { ellipseBubbleTailPos } from "./Bubbles/EllipseBubble";
import Tail from "./Tail";
import BubbleProps from "@/utils/Bubble/BubbleProps";
import Point from "@/utils/classes/Point";
import Size from "@/utils/classes/Size";
import useMousePosition from "@/utils/hooks/useMousePosition";
import tailReducer from "./Bubbles/tailReducer";

const Bubble: React.FC<BubbleProps> = ({
  type,
  size,
  position,
  targetPosition,
}) => {
  let mousePosition = useMousePosition(); // TODO: 口（対象）の座標に変更する
  mousePosition = targetPosition ? targetPosition : mousePosition; 

  // Bubble
  const viewBoxSize: Size = size;
  const bubbleSize: Size = viewBoxSize.divide(2);
  const offset: Point = viewBoxSize.subtract(bubbleSize).divide(2).toPoint();
  const tailSize: Size = bubbleSize.divide(4);
  const tailRelativeCenter: Point = bubbleSize.toPoint().divide(2).add(offset); // 吹き出しにおける尻尾の中心の相対座標

  // Tail
  // Tailの状態を管理するためuseReducerを使用
  const initialState = {
    rotation: 0,
    tailPos: bubbleSize.add(offset.divide(2)),
  };
  const tailPositionFunctions = {
    rounded: roundedBubbleTailPos,
    square: squareBubbleTailPos,
    ellipse: ellipseBubbleTailPos,
  };
  const tailReducerProps = {
    type,
    tailPositionFunctions,
    tailRelativeCenter,
    bubbleSize,
    position,
    mousePosition,
  };
  const [state, dispatch] = useReducer(
    (state: any, action: any) => tailReducer(state, action, tailReducerProps),
    initialState
  );

  useEffect(() => {
    dispatch({ type: "UPDATE_POSITION" });
  }, [mousePosition]);

  // Tailの各点の初期座標を計算
  const points = {
    x1: state.tailPos.x - tailSize.width / 2,
    y1: state.tailPos.y - tailSize.height / 2,
    x2: state.tailPos.x + tailSize.width / 2,
    y2: state.tailPos.y,
    x3: state.tailPos.x - tailSize.width / 2,
    y3: state.tailPos.y + tailSize.height / 2,
  };

  const strokeWidth = 3; //TODO: typeによって分類
  const tail = <Tail points={points} state={state} strokeWidth={strokeWidth} />;

  const props = {
    offset,
    bubbleSize,
    strokeWidth,
    viewBoxSize,
    tail,
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
        left: position.x - size.width / 2,
        top: position.y - size.height / 2,
      }}
    >
      {bubble(type)}
    </div>
  );
};

export default Bubble;

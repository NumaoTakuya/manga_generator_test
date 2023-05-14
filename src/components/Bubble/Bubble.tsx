import React, { useEffect, useReducer } from "react";
import NoneBubble from "./NoneBubble";
import RoundedBubble from "./RoundedBubble";
import roundedBubbleTailPos from "../../utils/Bubble/tailPosition/roundedBubbleTailPos";
import SquareBubble from "./SquareBubble";
import squareBubbleTailPos from "../../utils/Bubble/tailPosition/squareBubbleTailPos";
import EllipseBubble from "./EllipseBubble";
import ellipseBubbleTailPos from "../../utils/Bubble/tailPosition/ellipseBubbleTailPos";
import Tail from "./Tail";
import BubbleProps from "@/utils/Bubble/BubbleProps";
import Point from "@/utils/classes/Point";
import Size from "@/utils/classes/Size";
import useTargetPosition from "@/utils/hooks/useTargetPosition";
import tailReducer from "./tailReducer";
import calculateBubbleSize from "@/utils/Bubble/calculateBubbleSize";
import {
  TailReducerState,
  TailReducerAction,
} from "@/utils/Bubble/tailReducerTypes";

const Bubble: React.FC<BubbleProps> = ({
  text,
  style,
  aspectRatio,
  position,
  mouthPosition,
  fontSize,
  font,
}) => {
  // テスト時コメントアウト解除
  // let cursorPosition = useCursorPosition();
  // console.log("cursorPosition", cursorPosition);
  // mouthPosition = mouthPosition ? mouthPosition : cursorPosition;

  // Target Position
  const { targetPosition } = useTargetPosition(
    mouthPosition,
    position
  );

  // Bubble
  const bubbleSize = calculateBubbleSize(
    style,
    text.length,
    aspectRatio,
    fontSize
  );
  const viewBoxSize = bubbleSize.multiply(2);
  const offset = viewBoxSize.subtract(bubbleSize).divide(2).toPoint();
  const tailSize: Size = bubbleSize.divide(4);
  const tailRelativeCenter: Point = bubbleSize.toPoint().divide(2).add(offset); // 吹き出しにおける尻尾の中心の相対座標

  // Tail
  // Tailの状態を管理するためuseReducerを使用
  const initialState: TailReducerState = {
    rotation: 0,
    tailPos: new Point(bubbleSize.width / 2, bubbleSize.height / 2).add(offset), // 修正
  };
  const tailPositionFunctions = {
    none: null,
    rounded: roundedBubbleTailPos,
    square: squareBubbleTailPos,
    ellipse: ellipseBubbleTailPos,
  };
  const tailReducerProps = {
    style,
    tailPositionFunctions,
    tailRelativeCenter,
    bubbleSize,
    position,
    targetPosition,
  };
  const [state, dispatch] = useReducer(
    (state: TailReducerState, action: TailReducerAction) =>
      tailReducer(state, action, tailReducerProps),
    initialState
  );

  useEffect(() => {
    dispatch({ type: "UPDATE_POSITION" });
  }, [targetPosition]);

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
  const tail = targetPosition ? <Tail points={points} state={state} strokeWidth={strokeWidth} /> : null;

  const props = {
    offset,
    bubbleSize,
    strokeWidth,
    viewBoxSize,
    tail,
    text,
    fontSize,
    font, 
  };

  const bubble = (style: string) => {
    switch (style) {
      case "none":
        return NoneBubble(props);
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
        left: position.x - viewBoxSize.width / 2,
        top: position.y - viewBoxSize.height / 2, 
      }}  
    >
      {bubble(style)}
    </div>
  );
};

export default Bubble;

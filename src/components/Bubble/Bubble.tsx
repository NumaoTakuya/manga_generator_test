import React, { useEffect, useReducer } from "react";
import NoneBubble from "./NoneBubble";  // 吹き出しの形状が無しの場合のコンポーネント
import RoundedBubble from "./RoundedBubble";  // 吹き出しの形状が丸い場合のコンポーネント
import roundedBubbleTailPos from "../../utils/Bubble/tailPosition/roundedBubbleTailPos";  // 丸い吹き出しの尻尾の位置を計算するユーティリティ
import SquareBubble from "./SquareBubble";  // 吹き出しの形状が四角い場合のコンポーネント
import squareBubbleTailPos from "../../utils/Bubble/tailPosition/squareBubbleTailPos";  // 四角い吹き出しの尻尾の位置を計算するユーティリティ
import EllipseBubble from "./EllipseBubble";  // 吹き出しの形状が楕円の場合のコンポーネント
import ellipseBubbleTailPos from "../../utils/Bubble/tailPosition/ellipseBubbleTailPos";  // 楕円の吹き出しの尻尾の位置を計算するユーティリティ
import Tail from "./Tail";  // 吹き出しの尻尾のコンポーネント
import BubbleProps from "@/utils/Bubble/BubbleProps";  // 吹き出しのプロパティタイプ
import Point from "@/utils/classes/Point";  // Pointクラス
import Size from "@/utils/classes/Size";  // Sizeクラス
import useTargetPosition from "@/utils/hooks/useTargetPosition";  // マウスカーソルの位置を取得するカスタムフック
import tailReducer from "./tailReducer";  // 吹き出しの尻尾の位置と回転を管理するReducer
import calculateBubbleSize from "@/utils/Bubble/calculateBubbleSize";  // 吹き出しのサイズを計算するユーティリティ
import {
  TailReducerState,
  TailReducerAction,
} from "@/utils/Bubble/tailReducerTypes";  // 吹き出しの尻尾のReducerで使用する型定義

const Bubble: React.FC<BubbleProps> = ({
  text,  // 吹き出しに表示するテキスト
  style,  // 吹き出しのスタイル
  aspectRatio,  // 吹き出しのアスペクト比
  position,  // 吹き出しの位置
  mouthPosition,  // 吹き出しの口（尻尾の始点）の位置
  fontSize,  // フォントサイズ
  font,  // フォント
}) => {

  // Target Position
  const { targetPosition } = useTargetPosition(  // ターゲット（マウスカーソル）の位置を取得
    mouthPosition,
    position
  );

  // Bubble
  const bubbleSize = calculateBubbleSize(  // 吹き出しのサイズを計算
    style,
    text.length,  // テキストの長さ
    aspectRatio,  // アスペクト比
    fontSize  // フォントサイズ
  );
  const viewBoxSize = bubbleSize.multiply(2);  // viewBoxのサイズを計算（吹き出しのサイズの2倍）
  const offset = viewBoxSize.subtract(bubbleSize).divide(2).toPoint();  // オフセットを計算
  const tailSize: Size = bubbleSize.divide(4);  // 尻尾のサイズを計算（吹き出しのサイズの1/4）
  const tailRelativeCenter: Point = bubbleSize.toPoint().divide(2).add(offset);  // 吹き出し内での尻尾の中心座標を計算

  // Tail
  // Tailの状態を管理するためuseReducerを使用
  const initialState: TailReducerState = {  // 尻尾の初期状態を設定
    rotation: 0,  // 回転角度
    tailPos: new Point(bubbleSize.width / 2, bubbleSize.height / 2).add(offset),  // 位置
  };
  const tailPositionFunctions = {  // 吹き出しの形状に応じた尻尾の位置計算関数のマップ
    none: null,
    rounded: roundedBubbleTailPos,
    square: squareBubbleTailPos,
    ellipse: ellipseBubbleTailPos,
  };
  const tailReducerProps = {  // Reducerに渡すプロパティ
    style,
    tailPositionFunctions,
    tailRelativeCenter,
    bubbleSize,
    position,
    targetPosition,
  };
  const [state, dispatch] = useReducer(  // Reducerを使用して尻尾の状態を管理
    (state: TailReducerState, action: TailReducerAction) =>
      tailReducer(state, action, tailReducerProps),
    initialState
  );

  useEffect(() => {  // ターゲットの位置が変わったときに尻尾の位置を更新
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

  const strokeWidth = 3;  // 線の太さを設定
  const tail = targetPosition ? <Tail points={points} state={state} strokeWidth={strokeWidth} /> : null;  // ターゲットがある場合は尻尾を表示

  const props = {  // 吹き出しコンポーネントに渡すプロパティ
    offset,
    bubbleSize,
    strokeWidth,
    viewBoxSize,
    tail,
    text,
    fontSize,
    font, 
  };

  const bubble = (style: string) => {  // 吹き出しの形状に応じて適切なコンポーネントを返す関数
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
    <div  // 吹き出しのコンポーネントを配置するdiv要素
      style={{
        position: "absolute",  // 絶対位置指定
        left: position.x - viewBoxSize.width / 2,  // 左端の位置
        top: position.y - viewBoxSize.height / 2,  // 上端の位置
      }}  
    >
      {bubble(style) /* 吹き出しのコンポーネントを描画*/}
    </div>
  );
};

export default Bubble;

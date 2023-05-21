import React from "react";
import { TailReducerState } from "@/utils/Bubble/tailReducerTypes";

// 三角形の各頂点の座標情報を格納するための型
interface TailPoint {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
} 

// このコンポーネントに渡す情報の型を定義。頂点情報、状態、線の太さが必要
interface TailProps {
  points: TailPoint;
  state: TailReducerState;
  strokeWidth: number;
}

// ここから本体。三角形をSVGの要素として描画する
const Tail = ({
  points,
  state,
  strokeWidth,
}: TailProps): JSX.Element | null => {
  // x1がなければ何もしない
  if (!points.x1) return null;
  return (
    <g
      // ここで三角形を回転させる。回転軸はstateのtailPosの位置
      transform={`rotate(${state.rotation}, ${state.tailPos.x}, ${state.tailPos.y})`}
    >
      {/* // ここで三角形の本体部分を描画。zIndexで他の要素より上に表示 */}
      <polygon
        points={`${points.x1},${points.y1} ${points.x2},${points.y2} ${points.x3},${points.y3}`}
        fill="white"
        style={{
          position: "relative",
          zIndex: 21,
        }}
      />
      {/* // ここで三角形の一辺を描画。zIndexで他の要素より上に表示 */}
      <line
        x1={points.x1}
        y1={points.y1}
        x2={points.x2}
        y2={points.y2}
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{
          position: "relative",
          zIndex: 22,
        }}
      />
      {/* // 三角形のもう一辺を描画。zIndexで他の要素より上に表示 */}
      <line
        x1={points.x2}
        y1={points.y2}
        x2={points.x3}
        y2={points.y3}
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{
          position: "relative",
          zIndex: 22,
        }}
      />
    </g>
  );
};
 
export default Tail;

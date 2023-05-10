import React from "react";

interface Point {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  x3: number;
  y3: number;
}

interface State {
  rotation: number;
  tailPos: { x: number; y: number };
}

interface TailProps {
  points: Point;
  state: State;
  strokeWidth: number;
}

const Tail = ({ points, state, strokeWidth }: TailProps): JSX.Element | null => {
  if (!points.x1) return null;
  return (
    <g transform={`rotate(${state.rotation}, ${state.tailPos.x}, ${state.tailPos.y})`}>
      <polygon
        points={`${points.x1},${points.y1} ${points.x2},${points.y2} ${points.x3},${points.y3}`}
        fill="white"
      />
      <line
        x1={points.x1}
        y1={points.y1}
        x2={points.x2}
        y2={points.y2}
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1={points.x2}
        y1={points.y2}
        x2={points.x3}
        y2={points.y3}
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </g>
  );
};

export default Tail;
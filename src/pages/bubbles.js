import React from "react";

const Bubble = ({ type }) => {
  const width = 80;
  const height = 45;
  const rx = 15;
  const ry = 15;
  const tailWidth = 10;
  const tailHeight = 10;
  const tailX = width;
  const tailY = height / 2 - tailHeight / 2;
  const offsetX = 5;
  const offsetY = 5;
  const viewBoxWidth = 110;
  const viewBoxHeight = 60;
  const strokeWidth = 1;

  const tail = (
    <>
      <polygon
        points={`${tailX},${tailY} ${tailX + tailWidth},${tailY} ${tailX},${
          tailY + tailHeight
        }`}
        fill="white"
      />
      <line
        x1={tailX}
        y1={tailY}
        x2={tailX + tailWidth}
        y2={tailY}
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1={tailX + tailWidth}
        y1={tailY}
        x2={tailX}
        y2={tailY + tailHeight}
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </>
  );

  switch (type) {
    case "rounded":
      return (
        <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
          <rect
            x={offsetX}
            y={offsetY}
            width={width}
            height={height}
            rx={rx}
            ry={ry}
            stroke="black"
            strokeWidth={strokeWidth * 2}
          />
          {tail}
          <rect
            x={offsetX}
            y={offsetY}
            width={width}
            height={height}
            rx={rx}
            ry={ry}
            fill="white"
          />
        </svg>
      );
    case "square":
      return (
        <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
          <rect
            x={offsetX}
            y={offsetY}
            width={width}
            height={height}
            fill="white"
            stroke="black"
            strokeWidth={strokeWidth * 2}
          />
          {tail}
          <rect
            x={offsetX}
            y={offsetY}
            width={width}
            height={height}
            fill="white"
          />
        </svg>
      );
    case "oval":
      return (
        <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
          <ellipse
            cx={width / 2 + offsetX}
            cy={height / 2 + offsetY}
            rx={width / 2}
            ry={height / 2}
            fill="white"
            stroke="black"
            strokeWidth={strokeWidth * 2}
          />
          {tail}
          <ellipse
            cx={width / 2 + offsetX}
            cy={height / 2 + offsetY}
            rx={width / 2}
            ry={height / 2}
            fill="white"
          />
        </svg>
      );
    default:
      return null;
  }
};

const BubblePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Bubble type="rounded" />
      <Bubble type="square" />
      <Bubble type="oval" />
    </div>
  );
};

export default BubblePage;

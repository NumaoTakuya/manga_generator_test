import React from "react";
import NavigationBar from "../components/NavigationBar";
import Bubble from "../components/Bubble";
import Point from "../utils/classes/Point";
import Size from "../utils/classes/Size";

const BubblePage = () => {
  const size = new Size(300, 200);
  const position = new Point(0, 0);
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
      <NavigationBar />
      <Bubble type="rounded" />
      <Bubble type="square" />
      <Bubble type="ellipse" />
    </div>
  );
};

export default BubblePage;

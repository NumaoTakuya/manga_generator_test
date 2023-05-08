import React from "react";
import NavigationBar from "../components/NavigationBar";
import Bubble from "../components/Bubble";
import Point from "../utils/classes/Point";
import Size from "../utils/classes/Size";

const BubblePage = () => { 

  const texts = [
    "Lately, I don't have time to read.",
    "I feel like going on a trip.",
    "It's nice weather today.",
  ];
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
      <Bubble type="rounded" size={new Size(400, 200)} position={new Point(200, 500)} text={texts[0]} />
      <Bubble type="square" size={new Size(400, 300)} position={new Point(400, 600)} text={texts[1]}/>
      <Bubble type="ellipse" size={new Size(500, 350)} position={new Point(600, 400)} text={texts[2]}/>
    </div>
  );
};

export default BubblePage;

import React from "react";
import NavigationBar from "../components/NavigationBar";
import Bubble from "../components/Bubble";
import Point from "../utils/classes/Point";
import Size from "../utils/classes/Size";

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
      <NavigationBar />
      <Bubble type="rounded" size={new Size(400, 200)} position={new Point(200, 500)} />
      {/* <Bubble type="square" size={new Size(40, 30)} position={new Point(40, 60)}/>
      <Bubble type="ellipse" size={new Size(50, 35)} position={new Point(60, 40)}/> */}
    </div>
  );
};

export default BubblePage;

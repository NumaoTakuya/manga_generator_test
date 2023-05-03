import React from "react";
import NavigationBar from "../components/NavigationBar";
import Bubble from "../components/Bubble";

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
      <Bubble type="rounded" />
      <Bubble type="square" />
      <Bubble type="ellipse" />
    </div>
  );
};

export default BubblePage;

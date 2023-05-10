import React from "react";
import NavigationBar from "../components/NavigationBar";
import Bubble from "../components/Bubble/Bubble";
import Point from "../utils/classes/Point"; 

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
      <Bubble
        style="rounded"
        aspectRatio={2}
        position={new Point(200, 500)}
        targetPosition={null}
        text={texts[0]}
        fontSize={20}
        font="Comic Sans MS"
      />
      <Bubble
        style="square"
        aspectRatio={2}
        position={new Point(400, 600)}
        targetPosition={null}
        text={texts[1]}
        fontSize={20}
        font="Comic Sans MS"
      />
      <Bubble
        style="ellipse"
        aspectRatio={2}
        position={new Point(600, 400)}
        targetPosition={null}
        text={texts[2]}
        fontSize={20}
        font="Comic Sans MS"
      />
    </div>
  );
};

export default BubblePage;

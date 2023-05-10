import { PanelData } from "@/utils/DataModels/MangaDataModel";
import Point from "@/utils/classes/Point";
import CenteredRect from "@/utils/classes/CenteredRect";
import imgSources from "./imgSources";

// Sample panel data
const panelData: PanelData = {
  image: {
    src: imgSources[0],
    frameRect: {
      cropRandomness: new Point(0.1, 0.3),
      centeredRect: new CenteredRect(500, 300, 300, 353),
    },
  },
  tone: {
    style: "horizontalGradient",
    primaryColor: "yellow",
    secondaryColor: "white",
    centeredRect: new CenteredRect(500, 300, 500, 300),
  },
  bubbles: [
    {
      style: "ellipse",
      aspectRatio: 2,
      fontSize: 16,
      font: "Comic Sans MS",
      content: "Hello World",
    },
  ],
  onomatopoeias: [
    {
      content: "BOOM",
      position: new Point(600, 300),
      rotation: 0,
      color: "#FF0000",
      fontSize: 32,
      font: "Arial",
    },
  ],
};

export default panelData;

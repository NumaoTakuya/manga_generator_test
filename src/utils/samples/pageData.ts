import { PanelData } from "@/utils/DataModels/MangaDataModel";
import CenteredRect from "@/utils/classes/CenteredRect";
import Point from "@/utils/classes/Point";
import imgSources from "./imgSources";

const panel0: PanelData = {
  image: {
    src: imgSources[0],
    frameRect: {
      cropRandomness: new Point(0.1, 0.3),
      centeredRect: new CenteredRect(300, 210, 590, 400),
    },
  },
  bubbles: [
    {
      style: "none",
      aspectRatio: 5.8,
      fontSize: 16,
      content:
        "BUT THERE ARE PEOPLE WHO JUST DON'T MINGLE WELL WITH OTHERS. YOU KNOW, I SHOULD JUST FOCUS ON MY STUDIES.",
    },
  ],
  onomatopoeias: [
    {
      content: "RUMMAGE",
      position: new Point(350, 100),
      rotation: -20,
      color: "white",
      fontSize: 20,
      font: "Arial",
    },
    {
      content: "RUMMAGE",
      position: new Point(250, 300),
      rotation: -20,
      color: "white",
      fontSize: 20,
      font: "Arial",
    },
  ],
};

const panel1: PanelData = {
  image: {
    src: imgSources[1],
    frameRect: {
      cropRandomness: new Point(0.1, 0.3),
      centeredRect: new CenteredRect(300, 820, 580, 400),
    },
  },
  bubbles: [
    {
      style: "ellipse",
      aspectRatio: 1.4,
      fontSize: 16,
      content: "HEY",
    },
    {
      style: "ellipse",
      aspectRatio: 2.3,
      fontSize: 16,
      content: "GIVE ME YOUR PHONE.",
    },
  ],
  onomatopoeias: [
    {
      content: "POINT",
      position: new Point(350, 1000),
      rotation: -20,
      color: "white",
      fontSize: 20,
      font: "Arial",
    },
  ],
};

const page = [panel0, panel1];

export default page;

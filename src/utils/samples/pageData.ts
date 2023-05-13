import { PanelData } from "@/utils/DataModels/MangaDataModel";
import CenteredRect from "@/utils/classes/CenteredRect";
import Point from "@/utils/classes/Point";

const baseY0 = 0;
const panelData0: PanelData = {
  image: {
    src: "https://media.discordapp.net/attachments/1058796281146908762/1105797645995343882/2023-05-10_19.00.40.jpg?width=1696&height=1060",
    frameRect: {
      cropRandomness: Point.ZERO,
      centeredRect: new CenteredRect(500, baseY0 + 210, 590, 370),
    },
  },
  bubbles: [
    {
      style: "none",
      aspectRatio: 10,
      position: new Point(500, baseY0 + 550),
      fontSize: 20,
      font: "Comic Sans MS",
      content:
        "BUT THERE ARE PEOPLE WHO JUST DON'T MINGLE WELL WITH OTHERS. YOU KNOW, I SHOULD JUST FOCUS ON MY STUDIES.",
    },
  ],
  onomatopoeias: [
    {
      content: "RUMMAGE",
      position: new Point(550, baseY0 + 180),
      rotation: -20,
      color: "black",
      fontSize: 25,
      font: "Comic Sans MS",
    },
    {
      content: "RUMMAGE",
      position: new Point(350, baseY0 + 400),
      rotation: -20,
      color: "black",
      fontSize: 25,
      font: "Comic Sans MS",
    },
  ],
};

const baseY1 = 600;
const panelData1: PanelData = {
  image: {
    src: "https://media.discordapp.net/attachments/1058796281146908762/1105797646318325760/2023-05-10_19.00.59.jpg?width=1494&height=1060",
    frameRect: {
      cropRandomness: Point.ZERO,
      centeredRect: new CenteredRect(500, baseY1 + 220, 580, 400),
    },
  },
  bubbles: [
    {
      style: "ellipse",
      aspectRatio: 1.4,
      position: new Point(700, baseY1 + 30),
      fontSize: 22,
      font: "Comic Sans MS",
      content: "HEY",
    },
    {
      style: "ellipse",
      aspectRatio: 4,
      position: new Point(570, baseY1 + 80),
      fontSize: 20,
      font: "Comic Sans MS",
      content: "GIVE ME YOUR PHONE.",
    },
  ],
  onomatopoeias: [
    {
      content: "POINT",
      position: new Point(500, baseY1 + 460),
      rotation: -20,
      color: "black",
      fontSize: 20,
      font: "Comic Sans MS",
    },
  ],
};

const baseY2 = 1260;
const panelData2: PanelData = {
  image: {
    src: "https://media.discordapp.net/attachments/1058796281146908762/1105797645995343882/2023-05-10_19.00.40.jpg?width=1696&height=1060",
    frameRect: {
      cropRandomness: Point.ZERO,
      centeredRect: new CenteredRect(500, baseY2 + 210, 590, 370),
    },
  },
  bubbles: [
    {
      style: "none",
      aspectRatio: 10,
      position: new Point(500, baseY2 + 550),
      fontSize: 20,
      font: "Comic Sans MS",
      content:
        "BUT THERE ARE PEOPLE WHO JUST DON'T MINGLE WELL WITH OTHERS. YOU KNOW, I SHOULD JUST FOCUS ON MY STUDIES.",
    },
  ],
  onomatopoeias: [
    {
      content: "RUMMAGE",
      position: new Point(550, baseY2 + 180),
      rotation: -20,
      color: "black",
      fontSize: 25,
      font: "Comic Sans MS",
    },
    {
      content: "RUMMAGE",
      position: new Point(350, baseY2 + 400),
      rotation: -20,
      color: "black",
      fontSize: 25,
      font: "Comic Sans MS",
    },
  ],
};

const pageData = [panelData0, panelData1/*, panelData2*/];

export default pageData;

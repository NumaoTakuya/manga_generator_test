import { PanelData } from "@/utils/DataModels/MangaDataModel";
import CenteredRect from "@/utils/classes/CenteredRect";
import Point from "@/utils/classes/Point";

const baseX = 200;

// Page 0
const baseY0 = 0;
const baseY00 = baseY0 + 0;
const panelData00: PanelData = {
  image: {
    src: "https://media.discordapp.net/attachments/1058796281146908762/1105797645995343882/2023-05-10_19.00.40.jpg?width=1696&height=1060",
    frameRect: {
      cropRandomness: Point.ZERO,
      centeredRect: new CenteredRect(baseX + 300, baseY00 + 210, 590, 370),
    },
  },
  bubbles: [
    {
      style: "none",
      aspectRatio: 10,
      position: new Point(baseX + 300, baseY00 + 550),
      fontSize: 20,
      font: "Comic Sans MS",
      content:
        "BUT THERE ARE PEOPLE WHO JUST DON'T MINGLE WELL WITH OTHERS. YOU KNOW, I SHOULD JUST FOCUS ON MY STUDIES.",
    },
  ],
  onomatopoeias: [
    {
      content: "RUMMAGE",
      position: new Point(baseX + 350, baseY00 + 180),
      rotation: -20,
      color: "black",
      fontSize: 25,
      font: "Comic Sans MS",
    },
    {
      content: "RUMMAGE",
      position: new Point(baseX + 150, baseY00 + 400),
      rotation: -20,
      color: "black",
      fontSize: 25,
      font: "Comic Sans MS",
    },
  ],
};

const baseY01 = baseY0 + 600;
const panelData01: PanelData = {
  image: {
    src: "https://media.discordapp.net/attachments/1058796281146908762/1105797646318325760/2023-05-10_19.00.59.jpg?width=1494&height=1060",
    frameRect: {
      cropRandomness: Point.ZERO,
      centeredRect: new CenteredRect(baseX + 300, baseY01 + 220, 580, 400),
    },
  },
  bubbles: [
    {
      style: "ellipse",
      aspectRatio: 1.4,
      position: new Point(baseX + 500, baseY01 + 30),
      fontSize: 22,
      font: "Comic Sans MS",
      content: "HEY",
    },
    {
      style: "ellipse",
      aspectRatio: 4,
      position: new Point(baseX + 370, baseY01 + 80),
      fontSize: 20,
      font: "Comic Sans MS",
      content: "GIVE ME YOUR PHONE.",
    },
  ],
  onomatopoeias: [
    {
      content: "POINT",
      position: new Point(baseX + 300, baseY01 + 460),
      rotation: -20,
      color: "black",
      fontSize: 20,
      font: "Comic Sans MS",
    },
  ],
};


// Page 1
const baseY1 = baseY01 + 660;
const baseY10 = baseY1 + 0;
const panelData10: PanelData = {
  image: {
    src: undefined,
    frameRect: {
      cropRandomness: Point.ZERO,
      centeredRect: new CenteredRect(baseX + 300, baseY10 + 275, 590, 550),
    },
  },
  bubbles: [
    {
      style: "none",
      aspectRatio: 10,
      position: new Point(baseX + 300, baseY10 + 275),
      fontSize: 30,
      font: "Comic Sans MS",
      content:
        "SIGH. OF COURSE, THINGS NEVER GO AS PLANNED. THIS IS SCHOOL, AFTER ALL.",
    },
  ],
  onomatopoeias: [],
};

// Page 2
const baseY2 = baseY10 + 550; 
const baseY20 = baseY2 + 0;
const panelData20: PanelData = {
  image: {
    src: "https://media.discordapp.net/attachments/1061113259979178044/1107177026462437417/2023-05-14_13.12.00.png?width=1466&height=1060",
    frameRect: {
      cropRandomness: Point.ZERO,
      centeredRect: new CenteredRect(baseX + 300, baseY20 + 350, 590, 424),
    },
  },
  bubbles: [
    {
      style: "ellipse",
      aspectRatio: 1.57,
      position: new Point(baseX + 250, baseY20 + 50),
      fontSize: 20,
      font: "Comic Sans MS",
      content: "NO. YOU GOT CAUGHT LAST TIME.",
    },
    {
      style: "ellipse",
      aspectRatio: 3,
      position: new Point(baseX + 370, baseY20 + 170),
      fontSize: 20,
      font: "Comic Sans MS",
      content: "OH, COME ON! I WON'T GET CAUGHT THIS TIME!",
    },
    {
      style: "ellipse",
      aspectRatio: 2,
      position: new Point(baseX + 200, baseY20 + 700),
      fontSize: 20,
      font: "Comic Sans MS",
      content: "BESIDES, I DON'T HAVE MUCH NETWORK DATA LEFT.",
    },
    {
      style: "ellipse",
      aspectRatio: 3,
      position: new Point(baseX + 400, baseY20 + 780),
      fontSize: 20,
      font: "Comic Sans MS",
      content: "I'M JUST GOING TO TEXT SOMEONE.",
    },
    {
      style: "ellipse",
      aspectRatio: 3,
      position: new Point(baseX + 210, baseY20 + 900),
      fontSize: 20,
      font: "Comic Sans MS",
      content: "THAT'S WHAT YOU SAID LAST TIME.",
    },
  ],
  onomatopoeias: [],
};

const pageData0 = [panelData00, panelData01];
const pageData1 = [panelData10];
const pageData2 = [panelData20];
const episodeData = [pageData0, pageData1, pageData2];

export default episodeData;

import NavigationBar from "@/components/NavigationBar";
import Panel from "@/components/Panel/Panel";
import Point from "@/utils/classes/Point";
import Size from "@/utils/classes/Size";

const sources = [
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060",
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102982059930161152/7f9e577686ec2e1e0700ff61232e208d.jpg?width=776&height=1060",
  "https://media.discordapp.net/attachments/1058796281146908762/1102982726287626270/00004-659911599.png?width=1024&height=1024",
  "https://media.discordapp.net/attachments/1061113259979178044/1102984309448646667/Screenshot_2023-05-02_at_12-19-44_Down_To_Earth_-_Episode_1.png?width=730&height=780",
];

const imageOfPanel0 = {
  src: sources[0],
  position: new Point(300, 210),
  width: 590,
};

const bubblesOfPanel0 = [
  {
    style: "none",
    position: new Point(300, 470),
    aspectRatio: 5.8,
    content:
      "BUT THERE ARE PEOPLE WHO JUST DON'T MINGLE WELL WITH OTHERS. YOU KNOW, I SHOULD JUST FOCUS ON MY STUDIES.",
  },
];

const onomatopoeiasOfPanel0 = [
  {
    content: "RUMMAGE",
    position: new Point(350, 100),
    rotation: -20,
    color: "white",
    fontSize: 20,
  },
  {
    content: "RUMMAGE",
    position: new Point(250, 300),
    rotation: -20,
    color: "white",
    fontSize: 20,
  },
];

const panel0 = {
  image: imageOfPanel0,
  bubbles: bubblesOfPanel0,
  onomatopoeias: onomatopoeiasOfPanel0,
  square: new Size(590, 400),
};

const imageOfPanel1 = {
  src: sources[1],
  position: new Point(300, 820),
  width: 580,
};

const bubblesOfPanel1 = [
  {
    style: "ellipse",
    position: new Point(500, 550),
    aspectRatio: 1.4,
    content: "HEY",
  },
  {
    style: "ellipse",
    position: new Point(400, 650),
    mouthPosition: new Point(320, 850),
    aspectRatio: 2.3,
    content: "GIVE ME YOUR PHONE.",
  },
];

const onomatopoeiasOfPanel1 = [
  {
    content: "POINT",
    position: new Point(350, 1000),
    rotation: -20,
    color: "white",
    fontSize: 20,
  },
];

const panel1 = {
  image: imageOfPanel1,
  bubbles: bubblesOfPanel1,
  onomatopoeias: onomatopoeiasOfPanel1,
  square: new Size(590, 400),
};

const page = [panel0, panel1];

const PagePage = () => {};

export default PagePage;

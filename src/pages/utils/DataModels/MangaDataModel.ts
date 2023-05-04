type Manga = Arc[];
type Arc = Episode[];
type Episode = Page[];
type Page = Panel[];
type Panel = {
  picture: Picture;
  bubbles: Bubble[];
  onomatopoeias: Onomatopoeia[];
};
type Picture = {
  src: string;
  alt: string;
  vertices: Coordinate[];
};
type Bubble = {
  style: BubbleStyle;
  position: Coordinate;
  mouthPosition: Coordinate;
  size: Size;
  content: string;
  tailIsVisible: boolean;
};
type BubbleStyle =
  | "rectangle"
  | "thought"
  | "speech"
  | "scream"
  | "whisper"
  | "shout"; //And more
type Coordinate = {
  x: string;
  y: string;
};
type Size = {
  width: string;
  height: string;
};
type Onomatopoeia = {
  content: string;
  position: Coordinate; // degree
  rotation: number;
  size: Size;
  style: OnomatopoeiaStyle;
};
type OnomatopoeiaStyle = "normal" | "bold" | "italic" | "bold-italic"; // Make it more various


export default Manga;
export type {
  Arc,
  Episode,
  Page,
  Panel,
  Picture,
  Bubble,
  Onomatopoeia,
  BubbleStyle,
  Coordinate,
  Size,
  OnomatopoeiaStyle,
};

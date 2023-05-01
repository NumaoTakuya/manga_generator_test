type Manga = Episode[];
type Episode = Page[];
type Page = Panel[];
type Panel = {
  picture: Picture;
  bubbles: Bubble[];
};
type Picture = {
  src: string;
  alt: string;
  vertices: Coordinate[];
};
type Bubble = {
  bubbleType: BubbleType;
  position: Coordinate;
  mouthPosition: Coordinate;
  size: Size;
  content: string;
};
type Coordinate = {
  x: string;
  y: string;
};
type Size = {
  width: string;
  height: string;
};
type BubbleType =
  | "rectangle"
  | "thought"
  | "speech"
  | "scream"
  | "whisper"
  | "shout"; //And more

export type {
  Manga,
  Episode,
  Page,
  Panel,
  Bubble,
  Coordinate,
  Size,
  Picture,
  BubbleType,
};

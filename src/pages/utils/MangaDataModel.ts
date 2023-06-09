type Manga = Episode[];
type Episode = Page[];
type Page = Panel[];
type Panel = {
  picture: Picture;
  bubbles: Bubble[];
};
type Bubble = {
  bubbleType: BubbleType;
  position: Coordinate;
  mouthPosition: Coordinate;
  size: Size;
};
type Coordinate = {
  x: string;
  y: string;
};
type Size = {
  width: string;
  height: string;
};
type Picture = {
  src: string;
  alt: string;
};
type BubbleType = "thought" | "speech" | "scream" | "whisper" | "shout";

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

import Size from "../classes/Size";
import Point from "../classes/Point";
import CenteredRect from "../classes/CenteredRect";

type MangaData = ArcData[];
type ArcData = EpisodeData[];
type EpisodeData = PageData[];
type PageData = PanelData[];
type PanelData = {
  image: ImageData;
  tone?: ToneData;
  bubbles: BubbleData[];
  onomatopoeias: OnomatopoeiaData[];
};
type ImageData = {
  src: string | undefined;
  frameRect: FrameRect;
};
type FrameRect = {
  cropRandomness: Point;
  centeredRect: CenteredRect;
};
type ToneData = {
  style: ToneStyle;
  primaryColor: string;
  secondaryColor?: string;
  centeredRect: CenteredRect;
};
type ToneStyle =
  | "horizontalGradient"
  | "verticalGradient"
  | "radialGradient"
  | "polkaDots"
  | "checkerboard"
  | "diagonalLines"
  | "crosshatch"
  | "horizontalStripes"
  | "verticalStripes"
  | "stars";
type BubbleData = {
  style: BubbleStyle; 
  position: Point;
  aspectRatio: number; // width / height
  fontSize?: number;
  font: string;
  content: string;
};
type BubbleStyle =
  | "none"
  | "rounded"
  | "ellipse"
  | "square"
  | "thought"
  | "speech"
  | "scream"
  | "whisper"
  | "shout"; //And more
type OnomatopoeiaData = {
  content: string;
  position: Point;
  rotation: number; // degree
  color: string;
  fontSize: number;
  font: string;
};

export default MangaData;
export type {
  ArcData,
  EpisodeData,
  PageData,
  PanelData,
  FrameRect,
  ToneData,
  ToneStyle,
  ImageData,
  BubbleData,
  BubbleStyle,
  OnomatopoeiaData,
};

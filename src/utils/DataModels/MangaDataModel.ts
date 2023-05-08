import Size from "../classes/Size";
import Point from "../classes/Point";

type Manga = Arc[];
type Arc = Episode[];
type Episode = Page[];
type Page = Panel[];
type Panel = {
  images: Image[];
  tone?: Tone;
  bubbles: Bubble[];
  onomatopoeias: Onomatopoeia[];
  square: Square;
};
type Square = Vertices | Size;
type Vertices = Point[];
type Image = {
  src?: string;
  position: Point;
  width: number;
};
type Tone = {
  primaryColor: string;
  secondaryColor: string;
  size: Size;
};
type Bubble = {
  style: BubbleStyle;
  position: Point;
  mouthPosition?: Point;
  aspectRatio: number; // width / height
  fontSize?: number;
  content: string;
};
type BubbleStyle =
  | "none"
  | "rectangle"
  | "thought"
  | "speech"
  | "scream"
  | "whisper"
  | "shout"; //And more
type Onomatopoeia = {
  content: string;
  position: Point;
  rotation: number; // degree
  color: string;
  fontSize: number;
  fontFamily?: string;
};

export default Manga;
export type {
  Arc,
  Episode,
  Page,
  Panel,
  Image,
  Bubble,
  Onomatopoeia,
  BubbleStyle,
  Point,
  Size,
};

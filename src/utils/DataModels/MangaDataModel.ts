import Size from "../classes/Size";
import Point from "../classes/Point";

type Manga = Arc[];
type Arc = Episode[];
type Episode = Page[];
type Page = Panel[];
type Panel = {
  characterImages: CharacterImage[];
  background: Background;
  bubbles: Bubble[];
  onomatopoeias: Onomatopoeia[];
  vertices: Point[];
};
type CharacterImage = {
  src?: string; 
  position: Point;
};
type Background = {
  src?: string;
  tone?: Tone;
};
type Tone = {
  primaryColor: string;
  secondaryColor: string;
  size: Size;
};
type Bubble = {
  style: BubbleStyle;
  position: Point;
  mouthPosition: Point;
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
type Onomatopoeia = {
  content: string;
  position: Point; // degree
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
  CharacterImage,
  Bubble,
  Onomatopoeia,
  BubbleStyle,
  Point,
  Size,
  OnomatopoeiaStyle,
};

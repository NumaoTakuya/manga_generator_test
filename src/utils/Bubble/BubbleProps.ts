import { BubbleStyle } from "@/utils/DataModels/MangaDataModel";
import Point from "@/utils/classes/Point";

type BubbleProps = {
  text: string;
  style: BubbleStyle;
  aspectRatio: number;
  position: Point;
  targetPosition: Point | null;
  fontSize: number;
  font: string;
};

export default BubbleProps;

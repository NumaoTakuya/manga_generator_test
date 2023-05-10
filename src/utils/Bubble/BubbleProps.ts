import { BubbleStyle } from "@/utils/DataModels/MangaDataModel";
import Point from "@/utils/classes/Point";

type BubbleProps = {
  text: string;
  style: BubbleStyle;
  aspectRatio: number;
  position: Point;
  targetPosition?: Point;
  fontSize: number;
};

export default BubbleProps;

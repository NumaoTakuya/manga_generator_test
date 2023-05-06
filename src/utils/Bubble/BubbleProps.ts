import BubbleType from "./BubbleType";
import Size from "@/utils/classes/Size";
import Point from "@/utils/classes/Point";

type BubbleProps = {
  text: string;
  type: BubbleType;
  size: Size;
  position: Point;
  targetPosition: Point;
};

export default BubbleProps;

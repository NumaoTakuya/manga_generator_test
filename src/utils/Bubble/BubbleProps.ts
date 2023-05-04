import BubbleType from "./BubbleType";
import Size from "@/utils/classes/Size";
import Point from "@/utils/classes/Point";

type BubbleProps = {
  type: BubbleType;
  size: Size;
  position: Point;
};

export default BubbleProps;

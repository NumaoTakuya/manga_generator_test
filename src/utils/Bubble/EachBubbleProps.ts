import Point from "../classes/Point";
import Size from "../classes/Size";

type EachBubbleProps = {
  offset: Point;
  bubbleSize: Size;
  strokeWidth: number;
  viewBoxSize: Size;
  tail: JSX.Element;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default EachBubbleProps;

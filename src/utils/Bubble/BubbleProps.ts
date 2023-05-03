type BubbleProps = {
  offsetX: number;
  offsetY: number;
  bubbleWidth: number;
  bubbleHeight: number;
  strokeWidth: number;
  viewBoxWidth: number;
  viewBoxHeight: number;
  tail: JSX.Element;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default BubbleProps;

// 解説スライド ->  https://www.slideshare.net/secret/w5qYvT6QZW78kY
import Size from "../classes/Size";
import BubbleType from "./BubbleType";

const calculateBubbleSize = (
  type: BubbleType,
  textLength: number,
  aspectRatio: number,
  fontSize: number
): Size => {
  const textBoxWidth = fontSize * Math.ceil(Math.sqrt(textLength * aspectRatio));
  const textBoxHeight = fontSize * Math.ceil(Math.sqrt(textLength / aspectRatio));
  const textBoxSize = new Size(textBoxWidth, textBoxHeight);

  switch (type) {
    case "square":
      return textBoxSize;
    default:
      return textBoxSize.multiply(1.414);
  }
};

export default calculateBubbleSize;


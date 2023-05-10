// 解説スライド ->  https://www.slideshare.net/secret/w5qYvT6QZW78kY
import Size from "../classes/Size";
import { BubbleStyle } from "../DataModels/MangaDataModel";

const calculateBubbleSize = (
  style: BubbleStyle,
  textLength: number,
  aspectRatio: number,
  fontSize: number
): Size => {
  const textBoxWidth =
    fontSize * Math.ceil(Math.sqrt(textLength * aspectRatio));
  const textBoxHeight =
    fontSize * Math.ceil(Math.sqrt(textLength / aspectRatio));
  const textBoxSize = new Size(textBoxWidth, textBoxHeight);

  switch (style) {
    case "square":
      return textBoxSize;
    case "none":
      return textBoxSize;
    default:
      return textBoxSize.multiply(1.414);
  }
};

export default calculateBubbleSize;

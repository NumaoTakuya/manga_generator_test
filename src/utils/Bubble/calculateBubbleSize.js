// 解説スライド ->  https://www.slideshare.net/secret/w5qYvT6QZW78kY
import Size from "../classes/Size";

const calculateBubbleSize = (type, textLength, aspectRatio, fontSize) => {
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

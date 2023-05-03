import { roundedBubbleTailPos } from "../../components/Bubbles/RoundedBubble";
import { squareBubbleTailPos } from "../../components/Bubbles/SquareBubble";
import { ellipseBubbleTailPos } from "../../components/Bubbles/EllipseBubble"; 

type reducerComponentProps = {
  type: string;
  centerX: number;
  centerY: number;
  bubbleWidth: number;
  bubbleHeight: number;
};

const BubbleReducer = (
  state: any,
  action: { type: string },
  { type, centerX, centerY, bubbleWidth, bubbleHeight }: reducerComponentProps
) => {
  switch (action.type) {
    case "UPDATE_POSITION":
      const angle = ((state.rotation + 1) * Math.PI) / 180;
      let newTailX, newTailY;

      switch (type) {
        case "rounded":
          ({ newTailX, newTailY } = roundedBubbleTailPos(
            centerX,
            centerY,
            bubbleWidth,
            bubbleHeight,
            angle
          ));
          break;
        case "square":
          ({ newTailX, newTailY } = squareBubbleTailPos(
            centerX,
            centerY,
            bubbleWidth,
            bubbleHeight,
            angle
          ));
          break;
        case "ellipse":
          ({ newTailX, newTailY } = ellipseBubbleTailPos(
            centerX,
            centerY,
            bubbleWidth,
            bubbleHeight,
            angle
          ));
          break;
        default:
          return state;
      }

      return {
        rotation: (state.rotation + 1) % 360,
        tailX: newTailX,
        tailY: newTailY,
      };
    default:
      return state;
  }
};

export default BubbleReducer;

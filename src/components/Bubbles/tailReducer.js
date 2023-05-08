import CenteredRect from "@/utils/classes/CenteredRect";
import Point from "@/utils/classes/Point";

// 極座標における、原点からみたposの位相
function calculateAngle(position) {
  return Math.atan2(position.y, position.x);
}

// tailReducer.js
const tailReducer = (
  state,
  action,
  {
    type,
    tailPositionFunctions,
    tailRelativeCenter,
    bubbleSize,
    position,
    targetPosition,
  }
) => {
  switch (action.type) {
    case "UPDATE_POSITION":
      const angle = calculateAngle(targetPosition.subtract(position));
      const tailCenterRect = new CenteredRect(
        tailRelativeCenter.x,
        tailRelativeCenter.y,
        bubbleSize.width,
        bubbleSize.height
      );

      const tailPositionFunction = tailPositionFunctions[type];
      const { newTailX, newTailY } = tailPositionFunction(
        tailCenterRect,
        angle
      );
      return {
        rotation: (angle * 180) / Math.PI,
        tailPos: new Point(newTailX, newTailY),
      };

    default:
      return state;
  }
};

export default tailReducer;

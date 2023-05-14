//tailの状態を管理、更新するreducer
import CenteredRect from "@/utils/classes/CenteredRect";
import Point from "@/utils/classes/Point";
import Size from "@/utils/classes/Size";
import { BubbleStyle } from "@/utils/DataModels/MangaDataModel";

// 極座標における、原点からみたposの位相
function calculateAngle(position: Point): number {
  return Math.atan2(position.y, position.x);
}

type TailReducerAction = {
  type: "UPDATE_POSITION";
};

type TailReducerState = {
  rotation: number;
  tailPos: Point;
};

type TailReducerPayload = {
  style: BubbleStyle;
  tailPositionFunctions: { [key: string]: Function | null };
  tailRelativeCenter: Point;
  bubbleSize: Size;
  position: Point;
  targetPosition: Point | null;
};

const tailReducer = (
  state: TailReducerState,
  action: TailReducerAction,
  payload: TailReducerPayload
): TailReducerState => {
  if (!payload.targetPosition) return state;

  switch (action.type) {
    case "UPDATE_POSITION":
      const tailPositionFunction = payload.tailPositionFunctions[payload.style];
      if (!tailPositionFunction) return state;
      // console.log("position: ", payload.position);
      // console.log("targetPosition: ", payload.targetPosition);
      const angle = calculateAngle(
        payload.targetPosition.subtract(payload.position)
      );
      // console.log("angle: ", (angle * 180) / Math.PI);
      const tailCenterRect = new CenteredRect(
        payload.tailRelativeCenter.x,
        payload.tailRelativeCenter.y,
        payload.bubbleSize.width,
        payload.bubbleSize.height
      );
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

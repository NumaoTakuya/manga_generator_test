// tailReducerTypes.ts
import Point from "@/utils/classes/Point";

export interface TailReducerState {
  rotation: number;
  tailPos: Point;
}

export interface TailReducerAction {
  type: "UPDATE_POSITION";
}


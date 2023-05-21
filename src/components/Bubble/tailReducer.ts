//tailの状態を管理、更新するreducer
import CenteredRect from "@/utils/classes/CenteredRect";
import Point from "@/utils/classes/Point";
import Size from "@/utils/classes/Size";
import { BubbleStyle } from "@/utils/DataModels/MangaDataModel";

// 原点から見た位置に応じて角度を計算する関数。実際には、y座標とx座標のアークタンジェントを取得している
function calculateAngle(position: Point): number {
  return Math.atan2(position.y, position.x);
}

// アクションの型を定義する。ここでは位置を更新する一つのアクションのみがある
type TailReducerAction = {
  type: "UPDATE_POSITION";
};

// 状態の型を定義する。ここでは、回転としっぽの位置がある
type TailReducerState = {
  rotation: number;
  tailPos: Point;
};

// payloadの型を定義する。これはreducerに渡す追加情報
type TailReducerPayload = {
  style: BubbleStyle; // 吹き出しのスタイル
  tailPositionFunctions: { [key: string]: Function | null }; // 吹き出しの位置を計算する関数のマップ
  tailRelativeCenter: Point; // しっぽの相対的な中心点
  bubbleSize: Size; // 吹き出しのサイズ
  position: Point; // 現在の位置
  targetPosition: Point | null; // 目標の位置
};

// しっぽの状態を管理するreducer
const tailReducer = (
  state: TailReducerState,
  action: TailReducerAction,
  payload: TailReducerPayload
): TailReducerState => {
  // 目標位置がなければ現在の状態をそのまま返す
  if (!payload.targetPosition) return state;

  // アクションの種類によって処理を変える
  switch (action.type) {
    // 位置を更新するアクションの場合
    case "UPDATE_POSITION":
      // 吹き出しのスタイルに対応する位置計算関数を取得
      const tailPositionFunction = payload.tailPositionFunctions[payload.style];
      // 関数がなければ現在の状態をそのまま返す
      if (!tailPositionFunction) return state;
      // 現在位置から目標位置までの角度を計算
      const angle = calculateAngle(
        payload.targetPosition.subtract(payload.position)
      );

      // しっぽの中心を計算
      const tailCenterRect = new CenteredRect(
        payload.tailRelativeCenter.x,
        payload.tailRelativeCenter.y,
        payload.bubbleSize.width,
        payload.bubbleSize.height
      );

      // 新しいしっぽの位置を計算
      const { newTailX, newTailY } = tailPositionFunction(
        tailCenterRect,
        angle
      );

      // 新しい回転と位置を状態として返す
      return {
        rotation: (angle * 180) / Math.PI,
        tailPos: new Point(newTailX, newTailY),
      };

    // 予期しないアクションの場合、現在の状態をそのまま返す
    default:
      return state;
  }
};

// tailReducerをエクスポート
export default tailReducer;

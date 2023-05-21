import { useEffect, useState } from "react"; // Reactのフックをインポート
import useCursorPosition from "./useCursorPosition"; // カーソル位置取得のカスタムフックをインポート
import Point from "../classes/Point"; // Pointクラスをインポート

interface UseTargetPositionHook { // 戻り値の型を定義
  targetPosition: Point | null; 
}

const useTargetPosition = (
  mouthPosition: Point | null,
  position: Point
): UseTargetPositionHook => {
  const [targetPosition, setTargetPosition] = useState<Point | null>(
    mouthPosition
  ); // 目標位置のステート
  const [changeTargetPositionMode, setChangeTargetPositionMode] =
    useState(false); // 目標位置変更モードのステート
  let cursorPosition = useCursorPosition(); // カーソル位置の取得

  useEffect(() => {
    setTargetPosition(mouthPosition); // 目標位置を口の位置に設定
  }, [mouthPosition]);

  useEffect(() => {
    if (changeTargetPositionMode) { // 目標位置変更モードがオンの場合
      if (cursorPosition.distance(position) > 300) { // カーソルが遠すぎる場合
        setTargetPosition(null); // 目標位置をnullに設定
      } else { // カーソルが近くにある場合
        setTargetPosition(cursorPosition); // 目標位置をカーソル位置に設定
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorPosition, changeTargetPositionMode]); 

  useEffect(() => {
    const handlePageClick = () => { 
      if (changeTargetPositionMode) { // 目標位置変更モードがオンの場合
        // モードをオフにする
        setChangeTargetPositionMode(false);
      } else if (cursorPosition.distance(position) < 40) { // カーソルがBubbleの近くにある場合
        // モードをオンにする
        setChangeTargetPositionMode(true);
      }
    };
  
    // ページ全体に対するクリックイベントリスナーを追加
    window.addEventListener("click", handlePageClick);
    return () => {
      // コンポーネントがアンマウントされたときにイベントリスナーを削除
      window.removeEventListener("click", handlePageClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTargetPositionMode, cursorPosition]); 

  return { targetPosition }; // 目標位置を返す
};

export default useTargetPosition;

import { useEffect, useState } from "react";
import useCursorPosition from "./useCursorPosition";
import Point from "../classes/Point";

interface UseTargetPositionHook {
  targetPosition: Point | null;
  handleBubbleClick: (event: React.MouseEvent) => void;
}

const useTargetPosition = (
  mouthPosition: Point | null,
  position: Point
): UseTargetPositionHook => {
  const [targetPosition, setTargetPosition] = useState<Point | null>(
    mouthPosition
  );
  const [changeTargetPositionMode, setChangeTargetPositionMode] =
    useState(false);
  let cursorPosition = useCursorPosition();

  useEffect(() => {
    setTargetPosition(mouthPosition);
  }, [mouthPosition]);

  useEffect(() => {
    if (changeTargetPositionMode) {
      if (cursorPosition.distance(position) > 300) {
        setTargetPosition(null);
      } else {
        setTargetPosition(cursorPosition);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorPosition, changeTargetPositionMode]);

  const handleBubbleClick = (event: React.MouseEvent) => {
    // Bubbleがクリックされたときにモードを切り替える
    setChangeTargetPositionMode(!changeTargetPositionMode);
    event.stopPropagation();
  };

  const handlePageClick = () => {
    if (changeTargetPositionMode) {
      // モードがオンのとき、モードをオフにする
      setChangeTargetPositionMode(false);
    }
  };

  useEffect(() => {
    if (changeTargetPositionMode) {
      // ページ全体に対するクリックイベントリスナーを追加
      window.addEventListener("click", handlePageClick);
      return () => {
        // コンポーネントがアンマウントされたときにイベントリスナーを削除
        window.removeEventListener("click", handlePageClick);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeTargetPositionMode]);

  return { targetPosition, handleBubbleClick };
};

export default useTargetPosition;

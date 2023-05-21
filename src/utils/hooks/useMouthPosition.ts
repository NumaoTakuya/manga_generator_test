/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"; // reactのuseStateとuseEffectをインポート
import useDetectFace from "./useDetectFace"; // 顔認識用のカスタムフックをインポート
import Point from "../classes/Point"; // Pointクラスをインポート
import Rect from "../classes/Rect"; // Rectクラスをインポート

interface UseMouthPositionHook { // フックの戻り値の型定義
  modelsLoaded: boolean; // モデルのロード完了フラグ
  mouthPosition: Point | null; // 口の位置
}

const useMouthPosition = (
  imageId: string, // 画像のID
  imageRect: Rect, // 画像の矩形情報
): UseMouthPositionHook => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>( // 画像要素のステート
    null
  );
  const [loadCounter, setLoadCounter] = useState(0); // ロードカウンターのステート

  useEffect(() => { // 画像IDが変わるたびに画像要素を更新
    setImageElement(document.getElementById(imageId) as HTMLImageElement);
  }, [imageId]);

  useEffect(() => { // 画像要素が変わるたびにロードカウンターをインクリメント
    if (imageElement) {
      setLoadCounter((prevLoadCounter) => prevLoadCounter + 1);
    }
  }, [imageElement]);

  const detectFace = useDetectFace(imageElement, loadCounter); // 顔認識フックの利用
  const [modelsLoaded, detections, handleDetect] = [ // デストラクチャリングで各種値を取り出す
    detectFace.modelsLoaded, // モデルのロード完了フラグ
    detectFace.detections, // 顔認識結果
    detectFace.handleDetect, // 顔認識ハンドラー
  ];

  const [mouthPosition, setMouthPosition] = useState<Point | null>(null); // 口の位置のステート

  useEffect(() => { // モデルがロード完了したら顔認識を実行
    if (modelsLoaded) {
      handleDetect(() => {});
    }
  }, [modelsLoaded]);

  useEffect(() => { // 顔認識結果が更新されたら口の位置を計算
    if (detections && imageElement && detections.length > 0) { 
      const mouth = detections[0].landmarks.getMouth(); // 口のランドマークを取得
      const imageWidthScale = imageRect.width / imageElement.naturalWidth; // 画像のスケールを計算
      const newMouthPosition = new Point( // 新しい口の位置を計算
        imageRect.left + mouth[14].x * imageWidthScale,
        imageRect.top + mouth[14].y * imageWidthScale
      );
      setMouthPosition(newMouthPosition); // 口の位置を更新
    }
  }, [detections]);

  return { modelsLoaded,mouthPosition }; // モデルのロード完了フラグと口の位置を返す
};

export default useMouthPosition; // useMouthPositionフックのエクスポート

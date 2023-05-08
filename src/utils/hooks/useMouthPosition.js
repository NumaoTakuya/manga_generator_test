/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useDetectFace from "./useDetectFace";
import Point from "../classes/Point";

const useMouthPosition = (imageId) => {
  // 画像要素と読み込み回数のステートを定義
  const [imageElement, setImageElement] = useState(null);
  const [loadCounter, setLoadCounter] = useState(0);

  // 画像要素のIDが変更された場合に画像要素を取得
  useEffect(() => { 
    setImageElement(document.getElementById(imageId));
  }, [imageId]);

  // 画像要素が取得された場合に読み込み回数を更新
  useEffect(() => {
    if (imageElement) {
      setLoadCounter((prevLoadCounter) => prevLoadCounter + 1);
    }
  }, [imageElement]);

  // useDetectFaceフックを使用して顔の検出を行う
  const detectFace = useDetectFace(imageElement, loadCounter);
  const [modelsLoaded, detections, handleDetect] = [
    detectFace.modelsLoaded,
    detectFace.detections,
    detectFace.handleDetect,
  ];

  // 口の位置を表すPointオブジェクトのステートを定義
  const [mouthPosition, setMouthPosition] = useState(Point.ZERO);

  // モデルがロードされた場合、顔の検出を行う
  useEffect(() => {
    if (modelsLoaded) {
      handleDetect(() => {});
    }
  }, [modelsLoaded]);

  // 口の位置を更新する
  useEffect(() => {
    if (detections) {
      const imageRect = imageElement.getBoundingClientRect();  
      const mouth = detections[0].landmarks.getMouth(); 
      const newMouthPosition = new Point(
        imageRect.left + mouth[14].x,
        imageRect.top + mouth[14].y
      );
      setMouthPosition(newMouthPosition);
    }
  }, [detections]);

  // modelsLoadedとmouthPositionを返す
  return { modelsLoaded, mouthPosition };
};

export default useMouthPosition;

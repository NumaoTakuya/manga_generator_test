import { useState, useEffect } from "react"; // ReactのuseStateとuseEffectをインポート
import * as faceapi from "face-api.js"; // face-api.jsをインポート

interface UseDetectFaceHook { // フックの戻り値の型定義
  modelsLoaded: boolean; // モデルのロード完了を示すフラグ
  detections: faceapi.WithFaceLandmarks<{ detection: faceapi.FaceDetection }>[] | null; // 顔認識結果
  handleDetect: (onDetectEnd: () => void) => Promise<void>; // 顔認識を実行する関数
}

export default function useDetectFace(
  imageElement: HTMLImageElement | null, // 顔認識を行う画像要素
  loadCounter: number // モデルロードのトリガーとなるカウンター
): UseDetectFaceHook { 
  const [detections, setDetections] = useState<faceapi.WithFaceLandmarks<{ detection: faceapi.FaceDetection }>[] | null>(
    null
  ); // 顔認識結果を管理するための状態
  const [modelsLoaded, setModelsLoaded] = useState(false); // モデルのロード完了フラグを管理するための状態

  useEffect(() => { // モデルロードのための副作用関数
    loadModels();
  }, [loadCounter]);

  const loadModels = async () => { // モデルのロードを行う関数
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models"); // ssdMobilenetv1モデルのロード
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models"); // faceLandmark68Netモデルのロード
    setModelsLoaded(true); // モデルのロード完了フラグをtrueに設定
  };

  const handleDetect = async (onDetectEnd: () => void) => { // 顔認識を実行する関数
    if (!imageElement) return; // 画像要素が存在しない場合は早期リターン

    const options = new faceapi.SsdMobilenetv1Options(); // 顔認識のオプション設定

    const detectionsWithLandmarks = await faceapi
      .detectAllFaces(imageElement, options) // 画像要素から全ての顔を検出
      .withFaceLandmarks(); // 検出した顔から顔のランドマークを検出

    setDetections(detectionsWithLandmarks); // 検出結果を状態にセット
    onDetectEnd(); // 検出終了のコールバックを呼び出す
  };

  return { modelsLoaded, detections, handleDetect }; // フックの戻り値
}

/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react-hooks/exhaustive-deps
import { useState, useEffect } from "react";
import useDetectFace from "./useDetectFace";
import Point from "../classes/Point";

interface UseMouthPositionHook {
  modelsLoaded: boolean;
  mouthPosition: Point;
}

const useMouthPosition = (imageId: string): UseMouthPositionHook => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [loadCounter, setLoadCounter] = useState(0);

  useEffect(() => {
    setImageElement(document.getElementById(imageId) as HTMLImageElement);
  }, [imageId]);

  useEffect(() => {
    if (imageElement) {
      setLoadCounter((prevLoadCounter) => prevLoadCounter + 1);
    }
  }, [imageElement]);

  const detectFace = useDetectFace(imageElement, loadCounter);
  const [modelsLoaded, detections, handleDetect] = [
    detectFace.modelsLoaded,
    detectFace.detections,
    detectFace.handleDetect,
  ];

  const [mouthPosition, setMouthPosition] = useState<Point>(Point.ZERO);

  useEffect(() => {
    if (modelsLoaded) {
      handleDetect(() => {});
    }
  }, [modelsLoaded]);

  useEffect(() => {
    if (detections && imageElement) {
      const imageRect = imageElement.getBoundingClientRect();
      const mouth = detections[0].landmarks.getMouth();
      const newMouthPosition = new Point(
        imageRect.left + mouth[14].x,
        imageRect.top + mouth[14].y
      );

      setMouthPosition(newMouthPosition);
    }
  }, [detections]);

  return { modelsLoaded, mouthPosition };
};

export default useMouthPosition;

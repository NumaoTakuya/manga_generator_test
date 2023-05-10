/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useDetectFace from "./useDetectFace";
import Point from "../classes/Point";

interface UseMouthPositionHook {
  modelsLoaded: boolean;
  mouthPosition: Point | null;
}

const useMouthPosition = (
  imageId: string,
  imageWidth: number
): UseMouthPositionHook => {
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(
    null
  );
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

  const [mouthPosition, setMouthPosition] = useState<Point | null>(null);

  useEffect(() => {
    if (modelsLoaded) {
      handleDetect(() => {});
    }
  }, [modelsLoaded]);

  useEffect(() => {
    if (detections && imageElement && detections.length > 0) { 
        const imageRect = imageElement.getBoundingClientRect();
        const mouth = detections[0].landmarks.getMouth();
        const imageWidthScale = imageWidth / imageElement.naturalWidth;
        const newMouthPosition = new Point(
          imageRect.left + mouth[14].x * imageWidthScale,
          imageRect.top + mouth[14].y * imageWidthScale
        );

        setMouthPosition(newMouthPosition); 
    }
  }, [detections]);

  return { modelsLoaded, mouthPosition };
};

export default useMouthPosition;

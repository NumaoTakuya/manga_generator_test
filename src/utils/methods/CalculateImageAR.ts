import { useState, useEffect } from "react";

const CalculateImageAR = (src: string): number | null => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const aspectRatio = img.height / img.width;
      setAspectRatio(aspectRatio);
    };
  }, [src]);

  return aspectRatio;
};

export default CalculateImageAR;
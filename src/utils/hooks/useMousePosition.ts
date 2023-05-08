import { useEffect, useState } from "react";
import Point from "../classes/Point";

// Mouse position
const useMousePosition = (): Point => {
  const [pos, setPos] = useState<Point>(Point.ZERO);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPos(new Point(event.clientX, event.clientY));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return pos;
};

export default useMousePosition;
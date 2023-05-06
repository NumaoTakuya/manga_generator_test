import { useState, useEffect } from "react";
import {
  HorizontalGradient,
  VerticalGradient,
  RadialGradient,
  PolkaDots,
  Checkerboard,
  DiagonalLines,
  Crosshatch,
  HorizontalStripes,
  VerticalStripes,
  Stars,
} from "../../components/Tones";
import Size from "../classes/Size";

const useTone = () => {
  // 色のリスト
  const colors = ["red", "blue", "green", "orange", "purple", "pink", "black"];
  const primaryIndex = Math.floor(Math.random() * colors.length);
  const secondaryIndex =
    (primaryIndex + Math.floor(1 + Math.random() * colors.length - 2)) %
    colors.length;
  const primaryColor = colors[primaryIndex];
  const secondaryColor = colors[secondaryIndex];
  const toneSize = new Size(
    0.8 + Math.random() / 5,
    0.9 + Math.random() / 10
  ).multiply(600);
  const tones = [
    HorizontalGradient([primaryColor, secondaryColor], toneSize),
    VerticalGradient([primaryColor, secondaryColor], toneSize),
    RadialGradient([primaryColor, secondaryColor], toneSize),
    PolkaDots(primaryColor, toneSize),
    // Checkerboard(primaryColor, toneSize),
    DiagonalLines(primaryColor, toneSize),
    // Crosshatch(primaryColor, toneSize),
    // HorizontalStripes(primaryColor, toneSize),
    // VerticalStripes(primaryColor, toneSize),
    // Stars(primaryColor, toneSize),
  ];

  const [selectedTone, setSelectedTone] = useState(null);

  useEffect(() => {
    setSelectedTone(tones[Math.floor(Math.random() * tones.length)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { selectedTone };
};

export default useTone;

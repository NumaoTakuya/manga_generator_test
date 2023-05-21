import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { FrameRect } from "@/utils/DataModels/MangaDataModel";

interface CropImageProps {
  id: string;
  src: string | undefined;
  frameRect: FrameRect;
}

// ランダムな数を生成する関数
function getRandom(from: number, to: number): number {
  return from + Math.random() * (to - from);
}

// CropImageというコンポーネント
const CropImage = ({ id, src, frameRect }: CropImageProps): JSX.Element => {
  const centeredRect = frameRect.centeredRect; // 中心を基準にした矩形の情報
  const randomness = frameRect.cropRandomness; // クロップする際のランダム性を制御する値
  const width = centeredRect.width; // 矩形の幅
  const height = centeredRect.height; // 矩形の高さ

  // クロップの値を計算。各値は矩形の幅と高さに基づいて、ランダムなクロップを可能にする
  const cropValues = {
    x1: Math.floor(getRandom(0, randomness.x) * width),
    y1: Math.floor(getRandom(0, randomness.y) * height),
    x2: Math.floor(getRandom(1 - randomness.x, 1) * width),
    y2: Math.floor(getRandom(0, randomness.y) * height),
    x3: Math.floor(getRandom(1 - randomness.x, 1) * width),
    y3: Math.floor(getRandom(1 - randomness.y, 1) * height),
    x4: Math.floor(getRandom(0, randomness.x) * width),
    y4: Math.floor(getRandom(1 - randomness.y, 1) * height),
  };

  // クリップパスを定義。polygon関数を使って4つのポイントで形成される多角形を定義
  const croppedStyle = {
    clipPath: `polygon(${cropValues.x1}px ${cropValues.y1}px, ${cropValues.x2}px ${cropValues.y2}px, ${cropValues.x3}px ${cropValues.y3}px, ${cropValues.x4}px ${cropValues.y4}px)`,
  };

  // コンポーネントの戻り値。画像とそれをクリップするためのSVG要素を含むBox要素を返す
  return (
    <Box
      sx={{
        position: "absolute",
        left: centeredRect.centerX - width / 2,
        top: centeredRect.centerY - height / 2,
        width: width,
        height: height,
        marginBottom: "1rem",
        mt: 10,
        ...croppedStyle,
      }}
    >
      {src && (
        <Image
          id={id}
          src={src}
          alt="face"
          layout="responsive"
          width={width}
          height={height}
        />
      )}
      {src && <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 11,
        }}
      >
        {/* SVGのポリライン要素を使ってクロップする形状を描画。四角形の各頂点を結ぶ */}
        <polyline
          points={`${cropValues.x1},${cropValues.y1} ${cropValues.x2},${cropValues.y2} ${cropValues.x3},${cropValues.y3} ${cropValues.x4},${cropValues.y4} ${cropValues.x1},${cropValues.y1}`}
          fill="none"
          stroke="black"
          strokeWidth={6}
        />
      </svg>}
    </Box>
  );
};

export default CropImage;

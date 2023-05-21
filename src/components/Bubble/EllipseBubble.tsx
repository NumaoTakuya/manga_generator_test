import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import { Typography, Box } from "@mui/material";

// 関数コンポーネントの宣言。引数はEachBubbleProps型を持つprops。
const EllipseBubble: React.FC<EachBubbleProps> = ({
  offset,  // バブルのオフセット
  bubbleSize,  // バブルのサイズ
  strokeWidth,  // バブルの枠線の太さ
  viewBoxSize,  // viewBoxのサイズ
  tail,  // バブルの尾
  text,  // バブルに表示するテキスト
  fontSize,  // フォントのサイズ
  font,  // フォントの種類
}) => {
  // バブルを描画
  return (
    // バブルを囲むdiv。位置は相対的に、サイズはviewBoxSizeで指定
    <div
      style={{
        position: "relative",
        width: viewBoxSize.width,
        height: viewBoxSize.height,
      }} 
    >
      {/* SVG要素。位置は絶対的に、サイズは全体的に。*/}
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`}
      >
        {/* 楕円形のバブル。中心はバブルサイズとオフセットで、大きさはバブルサイズで指定。塗りは白、線は黒。*/}
        <ellipse
          cx={bubbleSize.width / 2 + offset.x}
          cy={bubbleSize.height / 2 + offset.y}
          rx={bubbleSize.width / 2}
          ry={bubbleSize.height / 2}
          fill="white"
          stroke="black"
          strokeWidth={strokeWidth * 2}
          style={{
            position: "relative",
            zIndex: 20,
          }} 
        />
        {/* バブルの尾。propsから受け取る。*/}
        {tail}
        {/* 二つ目の楕円形。この楕円形は塗りだけで、位置と大きさは最初の楕円形と同じ。*/}
        <ellipse
          cx={bubbleSize.width / 2 + offset.x}
          cy={bubbleSize.height / 2 + offset.y}
          rx={bubbleSize.width / 2}
          ry={bubbleSize.height / 2}
          fill="white"
          style={{
            position: "relative",
            zIndex: 23,
          }}  
        />
        {/* SVG要素内にHTML要素を埋め込むための要素。*/}
        <foreignObject width={viewBoxSize.width} height={viewBoxSize.height}>
          {/* バブル内のテキストを中央に配置するためのBoxコンポーネント*/}
          <Box
            sx={{
              height: viewBoxSize.height,
              width: viewBoxSize.width,
              textAlign: "center",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "initial",
            }}  
          >
            {/* バブル内に表示するテキスト */}
            <Typography
              component="p"
              color="black"
              fontSize={fontSize}
              fontFamily={font}
              sx={{
                width: bubbleSize.width / 1.414,
                lineHeight: 1,
                position: "relative",
                zIndex: 24,
              }} 
            >
              {/* propsから受け取ったテキスト */}
              {text}
            </Typography>
          </Box>
        </foreignObject>
      </svg>
    </div>
  );
};

export default EllipseBubble;  // 他のファイルからimportできるように、コンポーネントをエクスポート。

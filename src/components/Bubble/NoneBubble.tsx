import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import { Typography, Box } from "@mui/material";

// これがそのやつだよ、ReactのFC。色々なPropsを受け取るよ
const NoneBubble: React.FC<EachBubbleProps> = ({
  bubbleSize,    // バブルの大きさ
  viewBoxSize,   // viewBoxの大きさ
  text,          // 表示するテキスト
  fontSize,      // フォントの大きさ
  font,          // フォント
}) => {
  // divで囲む。位置は相対的になってて、widthとheightはviewBoxSizeから取ってくる
  return (
    <div
      style={{
        position: "relative",
        width: viewBoxSize.width,
        height: viewBoxSize.height,
      }}
    >
      {/* svgを使うよ。位置は絶対的に、サイズは全体に広げる */}
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`}
      >
        {/* SVG内にHTMLを入れるためのforeignObject。viewBoxのサイズと一緒 */}
        <foreignObject width={viewBoxSize.width} height={viewBoxSize.height}>
          {/* テキストをセンタリングするためのBox */}
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
            {/* ここでようやくテキストが表示される */}
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
              {/* ここがそのテキストだよ */}
              {text}
            </Typography>
          </Box>
        </foreignObject>
      </svg>
    </div>
  );
};

export default NoneBubble; // これで外部からも使えるようになったね


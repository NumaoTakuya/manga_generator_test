import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import { Typography, Box } from "@mui/material";

// 引数としてさまざまなプロパティを持つSquareBubbleコンポーネント。要するにテキストを吹き出しに入れて表示するやつだよ。
const SquareBubble: React.FC<EachBubbleProps> = ({
  offset, // 吹き出しの位置を決める
  bubbleSize, // 吹き出しの大きさを決める
  strokeWidth, // 吹き出しのボーダーの太さを決める
  viewBoxSize, // 表示領域のサイズを決める
  tail, // 吹き出しのしっぽ部分を決める
  text, // 吹き出しに表示するテキスト
}) => {
  return (
    // ポジショニングとサイズ設定のためのdivタグだ
    <div
      style={{
        position: "relative",
        width: viewBoxSize.width,
        height: viewBoxSize.height,
      }}
    >
      <svg
        // SVG要素の位置とサイズを設定。100%でいいんだってさ。
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        // SVGのビューポートを設定。0から始まってどれだけの範囲を見るかってこと。
        viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`}
      >
        {/* 吹き出し本体の描画。白で塗って黒の枠線。zIndexで他の要素との重なりを決定。*/}
        <rect
          x={offset.x}
          y={offset.y}
          width={bubbleSize.width}
          height={bubbleSize.height}
          fill="white"
          stroke="black"
          strokeWidth={strokeWidth * 2}
          style={{
            position: "relative",
            zIndex: 20,
          }}
        />
        {/* 吹き出しのしっぽを描画。 */}
        {tail}
        {/* 吹き出しの表面部分を描画。これがないとしっぽが内側から見えちゃう。 */}
        <rect
          x={offset.x}
          y={offset.y}
          width={bubbleSize.width}
          height={bubbleSize.height}
          fill="white"
          style={{
            position: "relative",
            zIndex: 23,
          }} 
        />
        {/* 吹き出し内にHTML要素（テキスト）を埋め込むためのforeignObjectタグ。 */}
        <foreignObject width={viewBoxSize.width} height={viewBoxSize.height}>
          {/* テキストの配置とスタイリングを行うためのBoxコンポーネント。 */}
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
            {/* テキスト本体。引数から受け取ったtextを表示する。 */}
            <Typography
              component="p"
              color="black"
              fontSize={20}
              sx={{
                width: bubbleSize.width / 1.414, // テキストの幅は吹き出しの幅より少し狭く
                lineHeight: 1, // 行間は文字サイズと同じ
                position: "relative",
                zIndex: 24, // 他の要素より前面に
              }}
            >
              {text}
            </Typography>
          </Box>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SquareBubble;

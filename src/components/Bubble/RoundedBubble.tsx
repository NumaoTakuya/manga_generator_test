import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import { Typography, Box } from "@mui/material";

const RoundedBubble: React.FC<EachBubbleProps> = ({
  offset,
  bubbleSize,
  strokeWidth,
  viewBoxSize,
  tail,
  text, 
}) => {
  const borderRadius = 60; // 丸いバブルの角を丸くするための設定だ

  return (
    <div
      style={{
        position: "relative", // divを画面の一部に固定するために "relative" を設定している
        width: viewBoxSize.width, // divの横幅
        height: viewBoxSize.height, // divの縦幅
      }}
    >
      <svg
        style={{
          position: "absolute", // SVGをdiv内で完全に固定するために "absolute" を設定している
          width: "100%", // SVGの横幅を親divの100%に設定
          height: "100%", // SVGの縦幅を親divの100%に設定
        }}
        viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`} // viewBoxはSVG内の表示領域を設定している。ここではSVG全体を表示
      >
        <rect // 黒枠付きの四角形（バブル）を作成
          x={offset.x} // 左上のX座標
          y={offset.y} // 左上のY座標
          width={bubbleSize.width} // 四角形の横幅
          height={bubbleSize.height} // 四角形の縦幅
          rx={borderRadius} // 角を丸くするためのX軸半径
          ry={borderRadius} // 角を丸くするためのY軸半径
          stroke="black" // 枠線の色を黒に設定
          strokeWidth={strokeWidth * 2} // 枠線の太さを設定（入力された値の2倍）
          style={{
            position: "relative", // バブルをSVG内の一部に固定するため "relative" を設定
            zIndex: 20, // 他の要素と重なった時の表示順位を設定（値が大きいほど前面に来る）
          }}
        />
        {tail /* バブルの尻尾部分を表示 */}  
        <rect // 白色の四角形（バブル）を作成（黒枠の内側に描画される）
          x={offset.x} // 同じく左上のX座標
          y={offset.y} // 同じく左上のY座標
          width={bubbleSize.width} // 同じく四角形の横幅
          height={bubbleSize.height} // 同じく四角形の縦幅
          rx={borderRadius} // 同じく角を丸くするためのX軸半径
          ry={borderRadius} // 同じく角を丸くするためのY軸半径
          fill="white" // 四角形の塗りつぶし色を白に設定
          style={{
            position: "relative", // バブルをSVG内の一部に固定するため "relative" を設定
            zIndex: 23, // 他の要素と重なった時の表示順位を設定（値が大きいほど前面に来る）
          }} 
        />
        <foreignObject width={viewBoxSize.width} height={viewBoxSize.height}> 
          <Box // テキストを中央に配置するためのBoxコンポーネント
            sx={{
              height: viewBoxSize.height, // Boxの縦幅
              width: viewBoxSize.width, // Boxの横幅
              textAlign: "center", // テキストを中央に寄せる
              margin: "auto", // 自動的に余白を設定（上下左右均等になる）
              display: "flex", // flexboxレイアウトを使用（子要素の位置調整が簡単になる）
              justifyContent: "center", // 横方向の中央に要素を配置
              alignItems: "center", // 縦方向の中央に要素を配置
              boxSizing: "initial", // ボックスの大きさ計算方式を初期設定に（widthとheightがborderやpaddingを含まない）
            }}
          >
            <Typography
              component="p" // pタグとしてレンダリング
              color="black" // テキストの色を黒に設定
              fontSize={20} // フォントの大きさを設定
              sx={{
                width: bubbleSize.width / 1.414, // テキストエリアの幅を設定（バブルの幅に対して約70%）
                lineHeight: 1, // テキストの行間を設定
                position: "relative", // テキストをBox内の一部に固定するため "relative" を設定
                zIndex: 24, // 他の要素と重なった時の表示順位を設定（値が大きいほど前面に来る）
              }} 
            >
              {text /* 表示するテキストを描画 */} 
            </Typography>
          </Box>
        </foreignObject>
      </svg>
    </div>
  );
};

export default RoundedBubble;

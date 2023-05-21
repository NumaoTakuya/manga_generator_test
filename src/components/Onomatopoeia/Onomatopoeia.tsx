// ReactとBoxコンポーネントのインポート
import React from "react";
import { Box } from "@mui/system";

// OnomatopoeiaProps型のインポート
import OnomatopoeiaProps from "@/utils/Onomatopoeia/OnomatopoeiaProps";

// Onomatopoeiaコンポーネントの定義
// propsはOnomatopoeiaProps型で指定
// 戻り値はJSX.Elementかnull
const Onomatopoeia = ({
  content,
  font,
  color,
  position,
  fontSize,
  rotation,
}: OnomatopoeiaProps): JSX.Element | null => {
  // contentが存在しない場合はnullを返す
  if (!content) return null;

  // 基本スタイルの定義
  // fontFamily, fontSize, position, textAlign, userSelect, transformを設定
  const baseStyle = {
    fontFamily: font,
    fontSize,
    position: "absolute",
    textAlign: "center",
    userSelect: "none",
    transform: `rotate(${rotation}deg)`,
  };

  // 外枠スタイルの定義
  // baseStyleを継承し、left, top, color, WebkitTextStrokeを追加設定
  const outerOutlineStyle = {
    ...baseStyle,
    left: position.x - fontSize / 2,
    top: position.y - fontSize / 2,
    color: color,
    WebkitTextStroke: `${fontSize / 4}px black`,
  };

  // 内枠スタイルの定義
  // baseStyleを継承し、left, top, color, WebkitTextStrokeを追加設定
  const innerOutlineStyle = {
    ...baseStyle,
    left: position.x - fontSize / 2,
    top: position.y - fontSize / 2,
    color: color,
    WebkitTextStroke: `${fontSize / 6}px white`,
  };

  // メインテキストスタイルの定義
  // baseStyleを継承し、left, top, colorを追加設定
  const mainTextStyle = {
    ...baseStyle,
    left: position.x - fontSize / 2,
    top: position.y - fontSize / 2,
    color: color, 
  };

  // スタイル適用したテキストを描画
  // 外枠、内枠、メインテキストの順で描画
  return (
    <>
      <Box component="span" sx={outerOutlineStyle}>
        {content}
      </Box>
      <Box component="span" sx={innerOutlineStyle}>
        {content}
      </Box>
      <Box component="span" sx={mainTextStyle}>
        {content}
      </Box>
    </>
  );
};

// Onomatopoeiaコンポーネントのエクスポート
export default Onomatopoeia;

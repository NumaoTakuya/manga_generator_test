import { useMemo, useCallback } from "react"; // ReactのuseMemoとuseCallbackフックをインポート
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
} from "../../components/Tone/Tones"; // トーンコンポーネントをインポート
import { ToneData, ToneStyle } from "../DataModels/MangaDataModel"; // データモデルをインポート
import CenteredRect from "../classes/CenteredRect"; // CenteredRectクラスをインポート
import Size from "../classes/Size"; // Sizeクラスをインポート

interface UseToneHook { // フックの戻り値の型定義
  RenderTone: JSX.Element | null;
}

const useTone = (toneData: ToneData | undefined): UseToneHook => { // useToneフックの定義
  const primaryColor = toneData?.primaryColor ?? "#000"; // 主要色の定義
  const secondaryColor = toneData?.secondaryColor ?? "#fff"; // 副色の定義
  const centeredRect = toneData?.centeredRect ?? CenteredRect.ZERO; // 中心矩形の定義
  const size = centeredRect?.size ?? Size.ZERO; // サイズの定義
  const tones: { [key in ToneStyle]: JSX.Element } = useMemo( // トーンの定義
    () => ({
      horizontalGradient: HorizontalGradient(
        [primaryColor, secondaryColor],
        size
      ),
      verticalGradient: VerticalGradient([primaryColor, secondaryColor], size),
      radialGradient: RadialGradient([primaryColor, secondaryColor], size),
      polkaDots: PolkaDots(primaryColor, size),
      checkerboard: Checkerboard(primaryColor, size),
      diagonalLines: DiagonalLines(primaryColor, size),
      crosshatch: Crosshatch(primaryColor, size),
      horizontalStripes: HorizontalStripes(primaryColor, size),
      verticalStripes: VerticalStripes(primaryColor, size),
      stars: Stars(primaryColor, size),
    }),
    [primaryColor, secondaryColor, size] // 依存配列
  );

  const setRenderTone = useCallback( // トーンのレンダリングを設定する関数
    (style: ToneStyle) => {
      return (
        <div
          style={{
            position: "absolute",
            left: `${centeredRect.point.x - centeredRect.size.width / 2}px`,
            top: `${centeredRect.point.y - centeredRect.size.height / 2}px`,
          }}
        >
          {tones[style]}
        </div>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tones] // 依存配列
  );

  const RenderTone = toneData ? setRenderTone(toneData.style) : null; // トーンのレンダリング
  return { RenderTone }; // 戻り値
};

export default useTone; // useToneのエクスポート

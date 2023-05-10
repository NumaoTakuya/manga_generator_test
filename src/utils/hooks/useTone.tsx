import { useMemo, useCallback } from "react";
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
} from "../../components/Tone/Tones";
import { ToneData, ToneStyle } from "../DataModels/MangaDataModel";
import CenteredRect from "../classes/CenteredRect";
import Size from "../classes/Size";

interface UseToneHook {
  RenderTone: JSX.Element | null;
}

const useTone = (toneData: ToneData | undefined): UseToneHook => {
  const primaryColor = toneData?.primaryColor ?? "#000";
  const secondaryColor = toneData?.secondaryColor ?? "#fff";
  const centeredRect = toneData?.centeredRect ?? CenteredRect.ZERO;
  const size = centeredRect?.size ?? Size.ZERO;
  console.log("centeredRect", centeredRect);
  const tones: { [key in ToneStyle]: JSX.Element } = useMemo(
    () => ({
      horizontalGradient: HorizontalGradient(
        [primaryColor, secondaryColor],
        size
      ),
      verticalGradient: VerticalGradient(
        [primaryColor, secondaryColor],
        size
      ),
      radialGradient: RadialGradient(
        [primaryColor, secondaryColor],
        size
      ),
      polkaDots: PolkaDots(primaryColor, size),
      checkerboard: Checkerboard(primaryColor, size),
      diagonalLines: DiagonalLines(primaryColor, size),
      crosshatch: Crosshatch(primaryColor, size),
      horizontalStripes: HorizontalStripes(primaryColor, size),
      verticalStripes: VerticalStripes(primaryColor, size),
      stars: Stars(primaryColor, size),
    }),
    [primaryColor, secondaryColor, size]
  );

  const setRenderTone = useCallback(
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
    [tones]
  );

  const RenderTone = toneData ? setRenderTone(toneData.style) : null;
  return { RenderTone };
};

export default useTone;

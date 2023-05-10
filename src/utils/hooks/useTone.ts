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

interface UseToneHook {
  RenderTone: JSX.Element | null;
}

const useTone = (toneData: ToneData | undefined): UseToneHook => {
  const primaryColor = toneData?.primaryColor ?? "#000";
  const secondaryColor = toneData?.secondaryColor ?? "#fff";
  const centeredRect = toneData?.centeredRect ?? CenteredRect.ZERO;
  const tones: { [key in ToneStyle]: JSX.Element } = useMemo(
    () => ({
      horizontalGradient: HorizontalGradient(
        [primaryColor, secondaryColor],
        centeredRect
      ),
      verticalGradient: VerticalGradient(
        [primaryColor, secondaryColor],
        centeredRect
      ),
      radialGradient: RadialGradient([primaryColor, secondaryColor], centeredRect),
      polkaDots: PolkaDots(primaryColor, centeredRect),
      checkerboard: Checkerboard(primaryColor, centeredRect),
      diagonalLines: DiagonalLines(primaryColor, centeredRect),
      crosshatch: Crosshatch(primaryColor, centeredRect),
      horizontalStripes: HorizontalStripes(primaryColor, centeredRect),
      verticalStripes: VerticalStripes(primaryColor, centeredRect),
      stars: Stars(primaryColor, centeredRect),
    }),
    [primaryColor, secondaryColor, centeredRect]
  );

  const setRenderTone = useCallback(
    (style: ToneStyle) => {
      return tones[style];
    },
    [tones]
  );

  const RenderTone = toneData ? setRenderTone(toneData.style) : null;
  return { RenderTone };
};

export default useTone;

import { useState, useEffect } from "react";
import OnomatopoeiaText from "../../components/Onomatopoeia/OnomatopoeiaText";
import { getRandomFromArray, getRandomColor, getRandomInt } from "../getRandom";
import Point from "../classes/Point";
import { OnomatopoeiaData } from "../DataModels/MangaDataModel";

interface UseOnomatopoeiaHook {
  RenderOnomatopoeia: JSX.Element | null;
}

const useOnomatopoeia = (
  mouthPosition: Point,
  onomatopoeiaDatas: OnomatopoeiaData[]
): UseOnomatopoeiaHook => {
  const [RenderOnomatopoeia, setRenderOnomatopoeia] =
    useState<JSX.Element | null>(null);
  useEffect(() => {
    let OnomatopoeiaTexts: JSX.Element | null = null;
    onomatopoeiaDatas.forEach((onomatopoeiaData, index) => {
      OnomatopoeiaTexts = (
        <>
          {OnomatopoeiaTexts}
          <OnomatopoeiaText key={index} {...onomatopoeiaData} />
        </>
      );
    });
    setRenderOnomatopoeia(OnomatopoeiaTexts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouthPosition]);
  return { RenderOnomatopoeia };
};

export default useOnomatopoeia;

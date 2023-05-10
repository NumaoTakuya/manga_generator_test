import { useState, useEffect } from "react";
import Onomatopoeia from "../../components/Onomatopoeia/Onomatopoeia"; 
import Point from "../classes/Point";
import { OnomatopoeiaData } from "../DataModels/MangaDataModel";

interface UseOnomatopoeiaHook {
  RenderOnomatopoeia: JSX.Element | null;
}

const useOnomatopoeia = (
  mouthPosition: Point | null,
  onomatopoeiaDatas: OnomatopoeiaData[]
): UseOnomatopoeiaHook => {
  const [RenderOnomatopoeia, setRenderOnomatopoeia] =
    useState<JSX.Element | null>(null);
  useEffect(() => {
    let Onomatopoeias: JSX.Element | null = null;
    onomatopoeiaDatas.forEach((onomatopoeiaData, index) => {
      Onomatopoeias = (
        <>
          {Onomatopoeias}
          <Onomatopoeia key={index} {...onomatopoeiaData} />
        </>
      );
    });
    setRenderOnomatopoeia(Onomatopoeias);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouthPosition]);
  return { RenderOnomatopoeia };
};

export default useOnomatopoeia;

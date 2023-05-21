import { useState, useEffect } from "react"; // reactのuseStateとuseEffectをインポート
import Onomatopoeia from "../../components/Onomatopoeia/Onomatopoeia"; // Onomatopoeiaコンポーネントをインポート
import Point from "../classes/Point"; // Pointクラスをインポート
import { OnomatopoeiaData } from "../DataModels/MangaDataModel"; // OnomatopoeiaData型をインポート

interface UseOnomatopoeiaHook { // UseOnomatopoeiaHookインターフェースの定義
  RenderOnomatopoeia: JSX.Element | null; // JSX要素またはnull型のRenderOnomatopoeiaプロパティの定義
}

const useOnomatopoeia = ( // useOnomatopoeiaフックの定義
  mouthPosition: Point | null, // 口の位置情報
  onomatopoeiaDatas: OnomatopoeiaData[] // オノマトペのデータ配列
): UseOnomatopoeiaHook => {
  const [RenderOnomatopoeia, setRenderOnomatopoeia] = // RenderOnomatopoeiaのstateを管理するuseState
    useState<JSX.Element | null>(null);
  useEffect(() => { // useEffectフック
    let Onomatopoeias: JSX.Element | null = null; // Onomatopoeiasの初期化
    onomatopoeiaDatas.forEach((onomatopoeiaData, index) => { // オノマトペデータ配列をループ
      Onomatopoeias = ( // Onomatopoeiasにオノマトペコンポーネントを追加
        <>
          {Onomatopoeias}
          <Onomatopoeia key={index} {...onomatopoeiaData} />
        </>
      );
    });
    setRenderOnomatopoeia(Onomatopoeias); // RenderOnomatopoeiaのstateを更新
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouthPosition]); // 口の位置が変更された時にuseEffectが発火
  return { RenderOnomatopoeia }; // RenderOnomatopoeiaを返す
};

export default useOnomatopoeia; // useOnomatopoeiaをエクスポート

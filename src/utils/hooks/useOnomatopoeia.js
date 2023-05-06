import { useState, useEffect } from "react";
import OnomatopoeiaText from "../../components/OnomatopoeiaText";
import { onomatopoeias, fonts } from "../Onomatopoeia/OnomatopoeiaAttributes";
import { getRandomFromArray, getRandomColor, getRandomInt } from "../getRandom";

const useOnomatopoeia = (mouthPosition) => {
  const position = {
    x: mouthPosition.x + getRandomInt(100, 200),
    y: mouthPosition.y + getRandomInt(-200, 200),
  };
  const size = getRandomInt(30, 100);
  const rotation = getRandomInt(-30, 30);
  const onomatopoeiaProps = {
    content: getRandomFromArray(onomatopoeias),
    font: getRandomFromArray(fonts),
    color: getRandomColor(),
    position: position,
    size: size,
    rotation: rotation,
  };
  const [RenderOnomatopoeia, setRenderOnomatopoeia] = useState(null);
  useEffect(() => {
    setRenderOnomatopoeia(<OnomatopoeiaText {...onomatopoeiaProps} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouthPosition]);
  return { RenderOnomatopoeia };
};

export default useOnomatopoeia;

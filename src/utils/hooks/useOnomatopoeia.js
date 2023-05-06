import OnomatopoeiaText from "../../components/OnomatopoeiaText";
import { onomatopoeias, fonts } from "../Onomatopoeia/OnomatopoeiaAttributes";
import { getRandomFromArray, getRandomColor } from "../getRandom";

const useOnomatopoeia = (position, size, rotation) => {
  const onomatopoeiaProps = {
    content: getRandomFromArray(onomatopoeias),
    font: getRandomFromArray(fonts),
    color: getRandomColor(),
    position: position,
    size: size,
    rotation: rotation,
  };
  const RenderOnomatopoeia = <OnomatopoeiaText {...onomatopoeiaProps} />;
  return { RenderOnomatopoeia };
};

export default useOnomatopoeia;

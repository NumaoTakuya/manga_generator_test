import Size from "../classes/Size";
import CropImage from "../../components/CropImage";
import CalculateImageAR from "../CalculateImageAR";

const useCropImage = (src, imageId, width, cropRandomness) => {
  const ar = CalculateImageAR(src);
  const height = width * ar;
  const imageSize = new Size(width, height);
  const RenderCropImage = (
    <CropImage
      id={imageId}
      randomness={cropRandomness}
      src={src}
      size={imageSize}
    />
  );
  return { RenderCropImage };
};

export default useCropImage;

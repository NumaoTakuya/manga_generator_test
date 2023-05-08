import { ReactNode } from "react";
import CropImage from "../../components/CropImage";
import Point from "../classes/Point";
import CenteredRect from "../classes/CenteredRect"; 

interface CropImageHook {
  RenderCropImage: ReactNode;
}

const useCropImage = (
  src: string,
  imageId: string,
  cropRandomness: Point,
  centeredRect: CenteredRect
): CropImageHook => {
  const RenderCropImage = (
    <CropImage
      id={imageId}
      randomness={cropRandomness}
      src={src}
      centeredRect={centeredRect}
    />
  );
  return { RenderCropImage };
};

export default useCropImage;
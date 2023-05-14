import { ReactNode } from "react";
import CropImage from "../../components/Frame/CropImage";
import { FrameRect } from "../DataModels/MangaDataModel";

interface CropImageHook {
  RenderCropImage: ReactNode;
}

const useCropImage = (
  src: string | undefined,
  imageId: string, 
  frameRect: FrameRect
): CropImageHook => {
  const RenderCropImage = (
    <CropImage
      id={imageId} 
      src={src}
      frameRect={frameRect}
    />
  );
  return { RenderCropImage };
};

export default useCropImage;

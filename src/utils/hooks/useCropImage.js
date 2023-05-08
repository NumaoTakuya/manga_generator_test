import CropImage from "../../components/CropImage"; 

const useCropImage = (src, imageId, cropRandomness, centeredRect) => { 
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

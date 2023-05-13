import Size from "../../classes/Size";

type MangaImage = {
  url: string;
  width: number;
  height: number;
};

const stableDiffusionNegativePrompt =
  "boobs, hentai, ecchi, kawaii, (((text))), look at camera, disfigured, kitsch, ugly, oversaturated, grain, low-res, Deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, ugly, disgusting, poorly drawn, childish, mutilated, mangled, old, surreal";

const getSDImage = async (prompt: string, size: Size) => {
  const payload = {
    prompt,
    negative_prompt: stableDiffusionNegativePrompt,
    width: size.width,
    height: size.height,
  };
  const response = await fetch(
    `${process.env.SD_API_SERVER}sdapi/v1/txt2img`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const json = await response.json();
  const image: MangaImage = {
    url: `data:image/png;base64,${json.images[0]}`,
    width: size.width,
    height: size.height,
  };
  return image;
};

export default getSDImage;

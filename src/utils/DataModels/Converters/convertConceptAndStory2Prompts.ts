import Concept from "../ConceptDataModel";
import Story, { Shot } from "../StoryDataModel";
import Prompt from "../PromptDataModel";

const characterDescriptions = (concept: Concept, shot: Shot): string => {
  const characterNames = Object.keys(shot.description.characters);
  let characterDescriptions = "";
  characterNames.forEach((name) => {
    characterDescriptions += concept.characters.find(
      (character) => character.name === name
    )?.appearance;
  });
  return characterDescriptions;
};

const convertConceptAndStory2Prompts = (
  concept: Concept,
  story: Story,
  prefix: string,
  postfix: string
): Prompt[] => {
  const prompts: Prompt[] = [];
  story.forEach((shot) => {
    const prompt: Prompt =
      prefix +
      shot.description.background +
      characterDescriptions(concept, shot) +
      postfix;
    prompts.push(prompt);
  });
  return prompts;
};

export default convertConceptAndStory2Prompts;

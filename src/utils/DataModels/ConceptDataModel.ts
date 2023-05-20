type Concept = {
    genre: string;
    style: string; // the style of picture
    theme: string;
    target: string; // the target audience
    environment: string; // the environment of the story
    characters: Character[]
}
 
type Character = {
  name: string;
  appearance: string; // including gender, special feature(e.g. silhouette, color)
}; 

export default Concept;
export type { Character };
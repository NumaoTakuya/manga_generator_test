type Concept = {
    genre: string;
    style: string; // the style of picture
    theme: string;
    target: string; // the target audience
    environment: string; // the environment of the story
    characters: Character[]
}

type Character = CharacterRequirements & Partial<CharacterOptions>;

type CharacterRequirements = {
  name: string;
  appearance: string;
};

type CharacterOptions = {
  age: number;
  role: string;
  personality: string;
  background: string;
  motivation: string;
  goal: string;
  conflict: string;
  epiphany: string;
  resolution: string;
  arc: string;
  relationship: string;
  growth: string;
};

export default Concept;
export type { Character };
type Dialogue = Message[];
type Message = {
  speaker: string;
  content: string;
};
type Attributes = {
  importance: number; // how important is this shot to the story
  momentum: number; // how much is this shot dynamic
  intreval: number; // how long it takes time between this shot and the next
};
type Description = {
  characters: {[key: string]: string}; // key: character name, value: character composing
  background: string; // english please
};

type Shot = {
  dialogue: Dialogue;
  attributes: Attributes;
  description: Description;
}

type Story = Shot[];

export default Story;
export type { Shot, Dialogue, Message, Attributes, Description };

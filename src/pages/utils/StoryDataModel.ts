type Dialogue = Message[];
type Message = {
  speaker: Speaker;
  content: string;
};
type Speaker = {
  name: string;
  appearance: string;
};
type Attributes = {
  importance: number; // how important is this shot to the story
  momentum: number; // how much is this shot dynamic
  intreval: number; // how long it takes time between this shot and the next
};
type Description = {
  description: string; // description of the shot
};

type Shot = Dialogue & Attributes & Description;

export type { Shot, Dialogue, Message, Speaker, Attributes, Description };

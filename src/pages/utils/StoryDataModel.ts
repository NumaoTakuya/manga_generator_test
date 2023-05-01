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
  importance: number;
  momentum: number;
  intreval: number;
};
type Description = {
  description: string;
};

type Shot = Dialogue & Attributes & Description;

export type { Shot, Dialogue, Message, Speaker, Attributes, Description };
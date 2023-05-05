import { Description } from "./StoryDataModel";

type Prompt = {
    prefix: string;
    description: Description;
    postfix: string;
} 

export default Prompt;
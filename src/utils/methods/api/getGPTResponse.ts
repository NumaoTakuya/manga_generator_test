import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai"; 

type CompletionResponse = {
  content: string;
  messages: ChatCompletionRequestMessage[];
  finishReason?: string;
};

const config = new Configuration({ 
  apiKey: process.env.OPENAI_API_KEY,  
});
const openai = new OpenAIApi(config);


const getGPTResponse = async (
  prompt: string,
  messages: ChatCompletionRequestMessage[],
  model: string = "gpt-3.5-turbo",
  temperature?: number
): Promise<Omit<CompletionResponse, "finishReason">> => {
  let content: string | undefined = undefined;
  const message: ChatCompletionRequestMessage = {
    role: "user",
    content: prompt,
  };
  let count = 0;
  while (typeof content === "undefined") {
    count++;
    if (count > 10) {
      content = "Server error occurred. Please try again later.";
      break;
    } 
    try {
      const response = await openai.createChatCompletion({
        model: model,
        messages: [...messages, message],
        temperature: temperature ?? 1,
      });
      const data = response.data.choices[0];
      content = data.message?.content;

      if (
        data.finish_reason === "length" ||
        typeof content === "undefined" ||
        content.includes('"options"' || '"string"' || '""')
      ) {
        content = undefined;
        continue;
      }
    } catch (e) {
      console.error(e);
      content = undefined;
    }
  }
  messages.push({
    role: "assistant",
    content: content,
  });

  return {
    content,
    messages,
  };
}; 


export default getGPTResponse;
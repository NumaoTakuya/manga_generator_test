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

  const userMessage: ChatCompletionRequestMessage = {
    role: "user",
    content: prompt,
  }; 
  messages = [...messages, userMessage]

  const gptResponse = await openai.createChatCompletion({
    model: model,
    messages: messages,
    temperature: temperature ?? 1,
  }); 
  const gptMessage  = gptResponse.data.choices[0].message!; 
  const content = gptMessage.content;
  messages = [...messages, gptMessage];

  return {
    content,
    messages,
  };
};

export default getGPTResponse;

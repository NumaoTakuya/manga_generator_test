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
  isUser: boolean,
  system: string,
  prompt: string,
  messages: ChatCompletionRequestMessage[],
  model: string = "gpt-3.5-turbo",
  temperature?: number,
  max_tokens?: number
): Promise<Omit<CompletionResponse, "finishReason">> => {
  const systemMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: system,
  };
  const userMessage: ChatCompletionRequestMessage = {
    role: isUser ? "user" : "assistant",
    content: prompt,
  };
  messages = [...messages, userMessage];

  const gptResponse = await openai.createChatCompletion({
    model: model,
    messages: [systemMessage, ...messages],
    temperature: temperature ?? 1,
    max_tokens: max_tokens ?? 2048,
  });
  const gptMessage = gptResponse.data.choices[0].message!;
  gptMessage.role = isUser ? "assistant" : "user";
  const content = gptMessage.content;
  messages = [...messages, gptMessage];
  console.log("messages:", messages);

  return {
    content,
    messages,
  };
};

export default getGPTResponse;

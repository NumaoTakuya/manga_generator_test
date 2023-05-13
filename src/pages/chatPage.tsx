import React, { useState, useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";
import getGPTResponse from "@/utils/methods/api/getGPTResponse";
import NavigationBar from "@/components/NavigationBar";
import { ChatCompletionRequestMessage } from "openai";
import "@/utils/Extensions/lastElem";

const ChatPage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([
    {
      role: "user",
      content: "Hi",
    },
  ]);
  const [chatting, setChatting] = useState<boolean>(false);
  const [waiting, setWaiting] = useState<boolean>(false);
  const handleChatting = () => {
    setChatting(!chatting);
  };

  const [previousCharacter, setPreviousCharacter] = useState<string>("harry");
  const getGPTResponseAysnc = async (character: string) => {
    setWaiting(true);
    const lastMessage = messages.lastElem();
    const response = await getGPTResponse(
      lastMessage.role === "user",
      characterSystemDictionary[character],
      lastMessage.content,
      messages.slice(0, -1),
      "gpt-4",
      1,
      256
    );
    setMessages(response.messages);
    setPreviousCharacter(character);
    setWaiting(false);
  };

  useEffect(() => {
    if (chatting && !waiting) {
      const nextCharacter =
        previousCharacter === "harry" ? "hermione" : "harry";
      getGPTResponseAysnc(nextCharacter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatting, waiting]);

  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
      }}
    >
      <NavigationBar />
      <Button
        onClick={handleChatting}
        sx={{
          width: "100%",
          height: 40,
          mt: 10,
        }}
        style={{
          backgroundColor: chatting ? "red" : "green",
          color: "white",
        }}
      >
        {chatting ? "Stop Chat" : "Start Chat"}
      </Button>
      {messages.map((message, i) => (
        <Typography
          key={i}
          whiteSpace="pre-line"
          sx={{ color: "black", padding: 2, backgroundColor: "white" }}
        >
          {(message.role === "user" ? '"Harry": ' : '"Hermione": ') +
            message.content}
        </Typography>
      ))}
    </Container>
  );
};

export default ChatPage;

const characterSystemDictionary: { [key: string]: string } = {
  harry: `This is your character settings. You must behave following this settings.
    {
        'name': 'Harry Potter',
        'appearance': 'Glasses, lightning bolt scar, messy black hair',
        'age': 11,
        'role': 'Protagonist',
        'personality': 'Brave, loyal, curious',
        'background': 'Orphaned at a young age and raised by his cruel aunt and uncle',
        'motivation': 'To understand his magical heritage and abilities',
        'goal': 'To defeat Voldemort and protect his friends',
        'conflict': 'Struggles with the responsibilities and dangers he faces due to his fate',
        'epiphany': 'Understands that love and friendship are his greatest strengths',
        'resolution': 'Defeats Voldemort and ensures the safety of the wizarding world',
        'arc': 'Innocent to hero',
        'relationship': 'Best friends with Hermione Granger and Ron Weasley',
        'growth': 'From naive and insecure to confident and brave'
    }`,
  hermione: `This is your character settings. You must behave following this settings.
    {
        'name': 'Hermione Granger',
        'appearance': 'Bushy brown hair, brown eyes, usually seen with a book',
        'age': 11,
        'role': 'Deuteragonist',
        'personality': 'Intelligent, rule-abiding, caring',
        'background': 'Born to Muggle parents, she finds out she is a witch at age 11',
        'motivation': 'To master magic and help her friends',
        'goal': 'To support Harry in defeating Voldemort',
        'conflict': 'Often struggles with breaking rules despite knowing it is necessary',
        'epiphany': 'Learns that there are more important things than books and cleverness',
        'resolution': 'Plays a crucial role in defeating Voldemort and reforms the Ministry of Magic',
        'arc': 'Rule-follower to rebel',
        'relationship': 'Best friends with Harry Potter and Ron Weasley',
        'growth': 'From bookish and inflexible to resourceful and adaptable'
    }
    `,
};

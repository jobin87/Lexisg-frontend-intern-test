import { useState } from "react";
import { Outlet } from "react-router-dom";

export const AiSupportStateWrapper = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);

  return (
    <Outlet
      context={{
        inputValue,
        setInputValue,
        messages,
        setMessages,
      }}
    />
  );
};

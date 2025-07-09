import { Button, Divider, TextField, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const OverviewAiCard = () => {
    const theme = useTheme();
  
    const [inputValue, setInputValue] = useState("");
    const [showReadyText, setShowReadyText] = useState(true);
    const [messages, setMessages] = useState<
      { text: string; sender: "user" | "bot" }[]
    >([]);
  
  const handleSubmit = () => {
  if (inputValue.trim()) {
    const userMessage = { text: inputValue, sender: "user" } as const;
    const botReply = {
      text: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh...",
      sender: "bot",
    } as const;

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInputValue("");
    setShowReadyText(false);
  }
};

  return (
    <Box >
      
            {/* ✅ Message List */}
            {messages.length > 0 && (
              <Box
                sx={{
                  width: "100%",
                  maxHeight: "calc(100dvh - 210px)", // ✅ keeps it above the search box
                  overflowY: "auto", // ✅ scrolls when too long
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 1,
                  px:5,
                  mb:3
                }}
              >
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    sx={{
                      alignSelf: msg.sender === "user" ? "flex-end" : "flex-start", // ✅ key part
                      bgcolor: msg.sender === "user" ? "#1e1e1e" : "#f1f1f1",
                      color: msg.sender === "user" ? "#fff" : "#000",
                      p: 2,
                      borderRadius: 2,
                      fontSize: "15px",
                      lineHeight: 1.5,
                      boxShadow: theme.shadows[4],
                      wordBreak: "break-word",
                      whiteSpace: "pre-wrap",
                      width: "fit-content", // Size based on content
                      maxWidth: msg.sender==="bot"?"100%":"55%", // Don't go beyond this
                      minWidth: "20%", // Optional: looks better for short messages
                      mt:4
                    }}
                  >
                    {msg.text}
                  </Box>
                ))}
              </Box>
            )}
    </Box>
  );
};

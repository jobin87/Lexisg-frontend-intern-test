import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useAiSupportStore } from "src/store/aimessage";

export function FooterSection() {
  const theme = useTheme();

  // ✅ Get Zustand state
  const { inputValue, setInputValue, setMessages } = useAiSupportStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: "user" } as const;
      const botReply = {
        text: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        sender: "bot",
        citation: {
          para: 7,
          text: `“as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)`,
          pdfUrl: "/judgment.pdf", // replace with actual path or URL
        },
      } as const;

      console.log("User Message:", userMessage);
      console.log("Bot Reply:", botReply);

      setMessages((prev) => [...prev, userMessage, botReply]);
      setInputValue("");
    }
    
  };

  return (
    <Card sx={{ mb: 2, border: "1px solid" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 4,
          overflowX: "auto",
          flexWrap: "nowrap",
        }}
      >
        <Box
          sx={{
            minWidth: "100%",
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flexDirection: "row",
              display: "flex",
              gap: 2,
              alignItems: "center",
              px: 1,
              "body::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Opera
              },
            }}
          >
            <TextField
              size="medium"
              variant="filled"
              placeholder="Ask Anything"
              fullWidth
              multiline
              minRows={1}
              maxRows={8}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              InputProps={{
                disableUnderline: true,
                sx: {
                  alignItems: "center",
                  px: 2,
                  py: 1,
                },
              }}
              onKeyDown={(e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault(); // Prevent newline
    handleSubmit(e as any); // Call your submit handler
  }
}}

              inputProps={{
                sx: {
                  padding: 0,
                  fontSize: "16px",
                  maxHeight: "120px",
                  overflowY: "auto",
                },
                onWheel: (e: React.WheelEvent<HTMLTextAreaElement>) => {
                  e.stopPropagation(); // ✅ prevent outer scroll
                },
                "body::-webkit-scrollbar": {
                  display: "none", // Chrome, Safari, Opera
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 2,
              px: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Typography>+</Typography>
              <Typography>Tools</Typography>
            </Box>

            <Button size="small" variant="contained" onClick={handleSubmit}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

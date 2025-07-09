import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

type FooterSectionProps = {
  inputValue: string;
  setInputValue: (val: string) => void;
  setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: "user" | "bot" }[]>>;
};

const StyledElevation = styled("span")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  m: "auto",
  height: 24,
  zIndex: -1,
  opacity: 0.48,
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
  ml: 4,
  mr: 4,
}));



export function FooterSection({ inputValue, setInputValue, setMessages }: FooterSectionProps) {
  const theme = useTheme();


  const handleSubmit = () => {
  if (inputValue.trim()) {
    const userMessage = { text: inputValue, sender: "user" } as const;
    const botReply = {
      text: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh...",
      sender: "bot",
    } as const;

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInputValue("");
  }
};

  return (
    <Box sx={{ p: 1 }}>
      {/* ✅ Chat Input Box */}
      <Card
        sx={{
          m: "auto",
          width: "100%",
          maxWidth: "100%",
          borderRadius: 2,
          // backgroundColor: theme.palette.background.paper,
          // boxShadow: theme.shadows[24],
          // border: `2px solid ${theme.palette.divider}`,
        }}
      >
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
            {/* Input + Submit */}
            <Box
              sx={{
                flexDirection: "row",
                display: "flex",
                gap: 2,
                alignItems: "center",
                px: 1,
              }}
            >
              <TextField
                size="medium"
                variant="filled"
                placeholder="Ask Anything"
                fullWidth
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    height: 48, // Set desired height
                    alignItems: "center", // ✅ Vertically center the input area
                    px: 2, // Optional horizontal padding
                  },
                }}
                inputProps={{
                  sx: {
                    padding: 0, // Remove default vertical padding
                    // ✅ No textAlign — leave it default (left)
                  },
                }}
              />

              <Button size="small" variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>

            {/* Optional Footer Tools */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "row",
                gap: 2,
                pl: 3,
              }}
            >
              <Typography>+</Typography>
              <Typography>Tools</Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

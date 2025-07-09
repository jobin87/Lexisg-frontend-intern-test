// ✅ NO context usage here — props only
import { Box } from "@mui/system";

import { useAiSupportStore } from "src/store/aimessage";

export const OverviewAiCard = () => {
 const messages = useAiSupportStore((state) => state.messages);

  return (
  <Box
  sx={{
    width: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    px: 5,
  }}
>
  {messages.map((msg, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: msg.sender === "user" ? "flex-end" : "flex-start",
      }}
    >
      {/* Message Bubble */}
      <Box
        sx={{
          bgcolor: msg.sender === "user" ? "#1e1e1e" : "#f1f1f1",
          color: msg.sender === "user" ? "#fff" : "#000",
          p: 2,
          borderRadius: 2,
          fontSize: "15px",
          lineHeight: 1.5,
          wordBreak: "break-word",
          whiteSpace: "pre-wrap",
          width: "fit-content",
          maxWidth: msg.sender === "user"  ? "65%" : "100%",
          minWidth: "20%",
          mt: 2,
          mb: msg.sender === "bot" && msg.citation ? 1 : 4,
        }}
      >
        {msg.text}
      </Box>

      {/* Citation Below Bot Message */}
      {msg.sender === "bot" && msg.citation && (
        <Box
          sx={{
            bgcolor: "#f9f9f9",
            borderLeft: "3px solid #10a37f",
            borderRadius: 1,
            px: 2,
            py: 1.5,
            mb: 3,
            maxWidth: "90%",
          }}
        >
          <Box sx={{ fontSize: "13px", fontWeight: 500, mb: 0.5 }}>
            📎 Citation (Para {msg.citation.para}):
          </Box>
          <Box sx={{ fontSize: "13px", fontStyle: "italic", mb: 1 }}>
            {msg.citation.text}
          </Box>
          <a
            href="/pdfs/dani-vs-pritam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              color: "#10a37f",
              textDecoration: "underline",
            }}
          >
            Download Judgment PDF
          </a>
        </Box>
      )}
    </Box>
  ))}
</Box>


  );
};

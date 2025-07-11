import type { BoxProps } from "@mui/material/Box";

import { m } from "framer-motion";

import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

export type AnimateLogoProps = BoxProps & {
  logo?: React.ReactNode;
};

export function AnimateLogo1({ logo, sx, ...other }: AnimateLogoProps) {
  return (
    <Box
      sx={{
        width: 120,
        height: 120,
        alignItems: "center",
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        ...sx,
      }}
      {...other}
    >
      <Box
        component={m.div}
        animate={{ scale: [1, 0.9, 0.9, 1, 1], opacity: [1, 0.48, 0.48, 1, 1] }}
        transition={{
          duration: 2,
          repeatDelay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{ display: "inline-flex" }}
      ></Box>

      <Box
        component={m.div}
        animate={{
          scale: [1.6, 1, 1, 1.6, 1.6],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
        sx={{
          position: "absolute",
          width: "calc(100% - 20px)",
          height: "calc(100% - 20px)",
        }}
      />

      <Box
        component={m.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
        sx={{
          width: 1,
          height: 1,
          position: "absolute",
        }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

export function AnimateLogo2({ logo, sx, ...other }: AnimateLogoProps) {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      sx={{
        width: 96,
        height: 96,
        position: "relative",
        alignItems: "center",
        display: "inline-flex",
        justifyContent: "center",
        ...sx,
      }}
      {...other}
    >
      hello
    </Box>
  );
}

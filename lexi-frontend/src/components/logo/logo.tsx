import type { BoxProps } from "@mui/material/Box";

import { forwardRef, useId } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import { RouterLink } from "src/routes/components";

import { logoClasses } from "./classes";

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  isSingle?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    {
      width,
      href = "/",
      height,
      isSingle = true,
      disableLink = false,
      className,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();

    const gradientId = useId();

    const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    const PRIMARY_MAIN = theme.vars.palette.primary.main;
    const PRIMARY_DARKER = theme.vars.palette.primary.dark;

    /*
    * OR using local (public folder)
    *
    const singleLogo = (
      <Box
        alt="Single logo"
        component="img"
        src={`${CONFIG.assetsDir}/logo/logo-single.svg`}
        width="100%"
        height="100%"
      />
    );

    const fullLogo = (
      <Box
        alt="Full logo"
        component="img"
        src={`${CONFIG.assetsDir}/logo/logo-full.svg`}
        width="100%"
        height="100%"
      />
    );
    *
    */

const singleLogo = (
  <svg
  width="100%"
  height="100%"
  viewBox="0 0 200 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <text
    x="0"
    y="70"
    fontSize="60"
    fontFamily="Arial"
    fontWeight="bold"
    fill={`url(#${gradientId}-3)`}
  >
    Lexi
  </text>

  <defs>
    <linearGradient
      id={`${gradientId}-3`}
      x1="0"
      y1="0"
      x2="0"
      y2="1"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0%" stopColor={PRIMARY_LIGHT} />
      <stop offset="100%" stopColor={PRIMARY_MAIN} />
    </linearGradient>
  </defs>
</svg>

);


    const fullLogo = (
    <svg
  width="100%"
  height="100%"
  viewBox="0 0 200 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
>
  <text
    x="0"
    y="70"
    fontSize="60"
    fontFamily="Arial"
    fontWeight="bold"
    fill={`url(#${gradientId}-3)`}
  >
    Lexi
  </text>

  <defs>
    <linearGradient
      id={`${gradientId}-3`}
      x1="0"
      y1="0"
      x2="0"
      y2="1"
      gradientUnits="objectBoundingBox"
    >
      <stop offset="0%" stopColor={PRIMARY_LIGHT} />
      <stop offset="100%" stopColor={PRIMARY_MAIN} />
    </linearGradient>
  </defs>
</svg>

    );
    

  const baseSize = {
  width: width ?? 150, // instead of 40
  height: height ?? 40, // instead of 40
  ...(!isSingle && {
    width: width ?? 300,
    height: height ?? 100,
  }),
};


    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : "")}
        aria-label="Logo"
        sx={{
          ...baseSize,
          flexShrink: 0,
          display: "inline-flex",
          verticalAlign: "middle",
          ...(disableLink && { pointerEvents: "none" }),
          ...sx,
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);

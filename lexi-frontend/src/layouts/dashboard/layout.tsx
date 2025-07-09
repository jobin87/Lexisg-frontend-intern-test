import type { Breakpoint, SxProps, Theme } from "@mui/material/styles";
import type { NavSectionProps } from "src/components/nav-section";

import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";

import { useBoolean } from "src/hooks/use-boolean";

import { useSettingsContext } from "src/components/settings";

import { useState } from "react";
import { layoutClasses } from "../classes";
import { MenuButton } from "../components/menu-button";
import { SignInButton } from "../components/sign-in-button";
import { navData as dashboardNavData } from "../config-nav-dashboard";
import { FooterSection } from "../core/footersection";
import { HeaderSection } from "../core/header-section";
import { LayoutSection } from "../core/layout-section";
import { Main } from "./main";
import { NavMobile } from "./nav-mobile";
import { NavVertical } from "./nav-vertical";
import { useNavColorVars } from "./styles";
import { iconButtonClasses } from "@mui/material";
import { OverviewAiCard } from "src/section/dashboard/home/overview-first-card";
import { ReactElement, isValidElement, cloneElement } from "react";

// ----------------------------------------------------------------------

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
  data?: {
    nav?: NavSectionProps["data"];
  };
};

export function DashboardLayout({
  sx,
  children,
  header,
  data,
}: DashboardLayoutProps) {
  const theme = useTheme();

  const mobileNavOpen = useBoolean();

  const settings = useSettingsContext();

  const navColorVars = useNavColorVars(theme, settings);

  const layoutQuery: Breakpoint = "lg";

  const navData = data?.nav ?? dashboardNavData;
  
  const isNavMini = settings.navLayout === 'mini';
  const isNavHorizontal = settings.navLayout === 'horizontal';
  const isNavVertical = isNavMini || settings.navLayout === 'vertical';

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection

          layoutQuery={layoutQuery}
                    disableElevation={isNavVertical}
          slotProps={{
            toolbar: {
              sx: {
                ...(isNavHorizontal && {
                  bgcolor: 'var(--layout-nav-bg)',
                  [`& .${iconButtonClasses.root}`]: {
                    color: 'var(--layout-nav-text-secondary-color)',
                  },
                  [theme.breakpoints.up(layoutQuery)]: {
                    height: 'var(--layout-nav-horizontal-height)',
                  },
                }),
              },
            },
            container: {
              maxWidth: false,
              sx: {
                ...(isNavVertical && { px: { [layoutQuery]: 5 } }),
              },
            },
          }}
          sx={header?.sx}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: "none", borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            leftArea: (
              <>
                {/* -- Nav mobile -- */}
                <MenuButton
                  onClick={mobileNavOpen.onTrue}
                  sx={{
                    mr: 1,
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: "none" },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={mobileNavOpen.value}
                  onClose={mobileNavOpen.onFalse}
                  cssVars={navColorVars.section}
                />
              </>
            ),
            rightArea: <SignInButton />,
          }}
        />
      }
      /** **************************************
       * Sidebar
       *************************************** */
      sidebarSection={
         (
          <NavVertical
            data={navData}
            isNavMini={isNavMini}
            layoutQuery={layoutQuery}
            cssVars={navColorVars.section}
            onToggleNav={() =>
              settings.onUpdateField(
                'navLayout',
                settings.navLayout === 'vertical' ? 'mini' : 'vertical'
              )
            }
          />
        )
      }

      
      /** **************************************
       * Footer
       *************************************** */
      footerSection={
        <FooterSection
          inputValue={inputValue}
          setInputValue={setInputValue}
          setMessages={setMessages}
        />
      }
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        ...navColorVars.layout,
        "--layout-transition-easing": "linear",
        "--layout-transition-duration": "120ms",
        "--layout-nav-mini-width": "88px",
        "--layout-nav-vertical-width": "300px",
        "--layout-nav-horizontal-height": "64px",
        "--layout-dashboard-content-pt": theme.spacing(1),
        "--layout-dashboard-content-pb": theme.spacing(8),
        "--layout-dashboard-content-px": theme.spacing(5),
      }}
       sx={{
        [`& .${layoutClasses.hasSidebar}`]: {
          [theme.breakpoints.up(layoutQuery)]: {
            transition: theme.transitions.create(['padding-left'], {
              easing: 'var(--layout-transition-easing)',
              duration: 'var(--layout-transition-duration)',
            }),
            pl: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
          },
        },
        ...sx,
      }}
    >
  <Main isNavHorizontal={false}>
  {isValidElement(children)
    ? cloneElement(children as ReactElement<any>, {
        messages,
        inputValue,
        setMessages,
        setInputValue,
      })
    : children}
</Main>

    </LayoutSection>
  );
}

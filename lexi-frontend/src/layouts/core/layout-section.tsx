import {
  Box,
  GlobalStyles,
  Typography,
  useMediaQuery,
} from '@mui/material';
import type { CSSObject, SxProps, Theme } from '@mui/material/styles';
import { useAiSupportStore } from 'src/store/aimessage'; // Adjust path as needed
import { layoutClasses } from '../classes';

export type LayoutSectionProps = {
  sx?: SxProps<Theme>;
  cssVars?: CSSObject;
  children?: React.ReactNode;
  footerSection?: React.ReactNode;
  headerSection?: React.ReactNode;
  sidebarSection?: React.ReactNode;
};

export function LayoutSection({
  sx,
  cssVars,
  children,
  footerSection,
  headerSection,
  sidebarSection,
}: LayoutSectionProps) {
  const messages = useAiSupportStore((state) => state.messages);
  const hasMessages = messages.length > 0;

  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        body: {
          '--layout-nav-zIndex': 1101,
          '--layout-nav-mobile-width': '320px',
          '--layout-header-blur': '8px',
          '--layout-header-zIndex': 1100,
          '--layout-header-mobile-height': '64px',
          '--layout-header-desktop-height': '60px',
          ...cssVars,
        },
        'body::-webkit-scrollbar': {
        display: 'none',                // Chrome, Safari, Opera
      },
      }}
    />
  );

  const renderResponsiveText = () => (
    <Box sx={{ textAlign: 'center'}}>
      <Typography sx={{ color: '#10a37f', fontWeight: 500 }}>
        {isMdUp ? 'hey I am Lexi i am here for you!' : 'hey i am lexi i am Ready when you are.'}
      </Typography>
    </Box>
  );

  const renderContent = () => {
    const shouldHide = hasMessages;

    return (
      <>
        {/* Scrollable Content */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {children}
          {!shouldHide && renderResponsiveText()}
        </Box>

        {/* Sticky Footer */}
          <Box
            sx={{
              position: 'sticky',
              bottom: 0,
              zIndex: 1000,
              backgroundColor: 'background.paper',
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            {footerSection}
          </Box>
      </>
    );
  };

  return (
    <>
      {inputGlobalStyles}

      <Box
        id="root__layout"
        className={layoutClasses.root}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          ...sx,
        }}
      >
        {sidebarSection ? (
          <>
            {sidebarSection}
            <Box
              display="flex"
              flex="1 1 auto"
              flexDirection="column"
              className={layoutClasses.hasSidebar}
            >
              {headerSection}
              {renderContent()}
            </Box>
          </>
        ) : (
          <>
            {headerSection}
            {renderContent()}
          </>
        )}
      </Box>
    </>
  );
}

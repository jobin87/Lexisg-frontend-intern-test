import { useMediaQuery, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';
import type { CSSObject, SxProps, Theme } from '@mui/material/styles';
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
          '--layout-header-desktop-height': '72px',
          ...cssVars,
        },
      }}
    />
  );

  const renderResponsiveText = () => (
    <Box sx={{ textAlign: 'center', py: 2 }}>
      <Typography sx={{ color: '#10a37f', fontWeight: 500 }}>
        {isMdUp ? 'Welcome to the desktop view!' : 'Ready when you are.'}
      </Typography>
    </Box>
  );

  const renderResponsiveImage = () => (
    <Box sx={{ textAlign: 'center', py: 2 }}>
      <img
        src="/assets/your-image.png" // Replace with your image path
        alt="Responsive Example"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </Box>
  );

  const renderContent = () => {
    if (isMdUp) {
      return (
        <>
          {footerSection}
          {renderResponsiveText()}
          {children}
        </>
      );
    }
    return (
      <>
        {children}
        {renderResponsiveText()}
        {footerSection}
      </>
    );
  };

  return (
    <>
      {inputGlobalStyles}

      <Box id="root__layout" className={layoutClasses.root} sx={sx}>
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

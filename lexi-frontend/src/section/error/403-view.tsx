import { m } from "framer-motion";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { RouterLink } from "src/routes/components";

import { ForbiddenIllustration } from "src/assets/illustrations";

import { MotionContainer, varBounce } from "src/components/animate";
import { DashboardLayout } from "src/layouts/dashboard";

// ----------------------------------------------------------------------

export function View403() {
  return (
    <DashboardLayout>
      <Container component={MotionContainer}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            No permission
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            The page you’re trying to access has restricted access. Please refer
            to your system administrator.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button
          component={RouterLink}
          href="/"
          size="large"
          variant="contained"
        >
          Go to home
        </Button>
      </Container>
    </DashboardLayout>
  );
}

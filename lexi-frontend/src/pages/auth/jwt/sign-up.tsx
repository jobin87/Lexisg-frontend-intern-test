import { Helmet } from 'react-helmet-async';
import { JwtSignUpView } from 'src/auth/view/jwt';

import { CONFIG } from 'src/config-global';


// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Jwt - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <JwtSignUpView/>
    </>
  );
}

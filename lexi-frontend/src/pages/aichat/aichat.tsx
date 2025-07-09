import { SetStateAction } from 'react';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';
import { AiSupportView } from 'src/section/dashboard/home/view/ai-view';


// ----------------------------------------------------------------------

const metadata = { title: `Home | Jwt - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AiSupportView />
    </>
  );
}

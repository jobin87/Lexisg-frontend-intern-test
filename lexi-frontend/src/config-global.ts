import packageJson from "../package.json";
import { paths } from "./routes/paths";

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
  baseUrl: string;
   serverUrl: string;
  assetsDir: string;
  mapboxApiKey: string;
   auth: {
    method: 'jwt' ;
    skip: boolean;
    redirectPath: string;
  };
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: "usermanagement",
  appVersion: packageJson.version,
  serverUrl: import.meta.env.VITE_SERVER_URL ?? '',
  baseUrl: import.meta.env.VITE_AUTH_BASE_URL ?? "",
  assetsDir: import.meta.env.VITE_AUTH_ASSETS_DIR ?? "",
  mapboxApiKey: import.meta.env.VITE_MAPBOX_API_KEY ?? "",
   auth: {
    method: 'jwt',
    skip: false,
    redirectPath: paths.dashboard.AiChat,
  },

};

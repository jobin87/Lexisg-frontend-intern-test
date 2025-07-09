// ______________________________________________________

// ____________________________________________________________/

const ROOTS = {
  DASHBOARD: "/dashboard",
  AUTH: "/auth",
  SIMPLE:"/simple",
};

export const paths = {
  simple: {
    loadingpage: `${ROOTS.SIMPLE}/loadingpage`,
  },
  auth: {
     jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
  },
  dashboard: {
    AiChat: `${ROOTS.DASHBOARD}/ai/support`,
  },
};

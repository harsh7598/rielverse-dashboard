export const ROOTS = {
    ROOT: "/",
    AUTH: "/auth",
    DASHBOARD: "/dashboard",
    API: "/api"
}

export const ROUTES = {
  AUTH: {
    SIGNUP: `${ROOTS.AUTH}/signup`,
    LOGIN: `${ROOTS.AUTH}/login`,
    FORGOT: `${ROOTS.AUTH}/forgot`,
  },
  DASHBOARD: {
    ROOT: ROOTS.DASHBOARD,
    TASKS: `${ROOTS.DASHBOARD}/tasks`,
    // POLICIES: `${ROOTS.DASHBOARD}/policies`,
    POLICIES: (role?: "Agent" | "User") =>
      `${ROOTS.DASHBOARD}/policies${role && `?role=${role}`}`,

    QUOTATION: {
      ROOT: (form: string) => `${ROOTS.DASHBOARD}/quotation?form=${form}`,
      PAYMENT: `${ROOTS.DASHBOARD}/quotation/payment`,
    },
    //   QUOTES: `${ROOTS.DASHBOARD}/quotes`,
    QUOTES: (role?: "Agent" | "User") =>
      `${ROOTS.DASHBOARD}/quotes${role && `?role=${role}`}`,
  },
  API: {
    AUTH: {
      LOGOUT: `${ROOTS.API}/auth/logout`,
    },
  },
};
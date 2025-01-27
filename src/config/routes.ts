export const ROOTS = {
    ROOT: "/",
    AUTH: "/auth",
    DASHBOARD: "/dashboard",
    API: "/api"
}

export const ROUTES = {
  AUTH: {
    SIGNUP: `/signup`,
    LOGIN: `/login`,
    FORGOT: `/forgot`,
  },
  DASHBOARD: {
    ROOT: ROOTS.DASHBOARD,
    TASKS: `${ROOTS.DASHBOARD}/tasks`,
    // POLICIES: `${ROOTS.DASHBOARD}/policies`,
    POLICIES: (role?: "Agent" | "User") =>
      `${ROOTS.DASHBOARD}/policies`,

    QUOTATION: {
      ROOT: (form: string) => `${ROOTS.DASHBOARD}/quotation`,
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
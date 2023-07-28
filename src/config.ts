export const ocClientDomain =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5998"
    : "https://oc.failean.com";

export const clientDomain =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5999"
    : "https://dev.failean.com";

export const ocServerDomain =
  process.env.NODE_ENV === "development"
    ? "http://localhost:6777"
    : "https://tstocserver.failean.com";

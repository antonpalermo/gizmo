const baseUrl = () =>
  process.env.NODE_ENV !== "development"
    ? process.env.VERCEL_URL
    : "http://localhost:3000";

export default baseUrl;

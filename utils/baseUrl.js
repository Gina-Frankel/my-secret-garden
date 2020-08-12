// built in to node
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://my-secret-garden-dun.vercel.app"
    : "http://localhost:3000";

export default baseUrl;

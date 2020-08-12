// built in to node
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "my-secret-garden-dun.vercel.app"
    : "http://localhost:3000";

export default baseUrl;

const isDev = process.env.NODE_ENV !== "production";

export const config = {
  //Common
  APP_NAME: "app",

  //Server vars
  SERVER_HOST: isDev ? "localhost" : "0.0.0.0",
  SERVER_PORT: isDev ? 3000 : process.env.PORT || 80,
};

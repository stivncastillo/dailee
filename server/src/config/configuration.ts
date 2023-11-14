export interface ConfigurationType {
  port: number;
  database: {
    url: string;
    port: number;
  };
  auth: {
    accessTokenSecret: string;
    refreshTokenSecret: string;
  };
}

const config = (): ConfigurationType => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3001,
  database: {
    url: process.env.DATABASE_URL,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  auth: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  },
});

export default config;

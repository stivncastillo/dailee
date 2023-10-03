export interface ConfigurationType {
  port: number;
  database: {
    url: string;
    port: number;
  };
}

const config = (): ConfigurationType => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 3001,
  database: {
    url: process.env.DATABASE_URL,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});

export default config;

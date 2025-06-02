export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "uralcsd-db"),
      user: env("DATABASE_USERNAME", "mysql"),
      password: env("DATABASE_PASSWORD", "root"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});

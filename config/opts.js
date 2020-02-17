module.exports = require("yargs")
  .usage("Usage: $0 [options]")
  .alias("u", "url")
  .describe("u", "Application URL")
  .default("u", "http://128.199.253.235:3014")
  .alias("p", "port")
  .describe("p", "Port number for the Express application")
  .default("p", 3014)
  .describe("redis-host", "Redis Server hostname")
  .default("redis-host", "localhost")
  .describe("redis-port", "Redis Server port number")
  .default("redis-port", 6379)
  .describe("redis-pass", "Redis Server password")
  .default("redis-pass", false)
  .describe("redis-db", "Redis DB index")
  .default("redis-db", 0)
  .help("h")
  .alias("h", "help").argv;

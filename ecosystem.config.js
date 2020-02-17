module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "node-url-shortener",
      script: "npm",
      args: "run prod"
    }
  ]
};

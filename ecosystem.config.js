module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
      // First application
      {
        name: 'node-url-sorthener',
        script: 'npm',
        args: 'run start'
      }
    ]
  };

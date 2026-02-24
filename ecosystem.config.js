module.exports = {
  apps: [
    {
      name: "myapp",
      script: "app.js",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
}
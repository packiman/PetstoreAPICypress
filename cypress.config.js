const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2',
    projectId: "7jad3t",
  },
});

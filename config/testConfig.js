module.exports = {
  selenium: {
    // url: "http://localhost:4444",  // Adresse du serveur Selenium
    browser: "chrome"
  },
  appium: {
    host: "localhost",
    port: 4723
  },
  postman: {
    collection: "./tests/api/my_collection.json"
  },
  performance: {
    k6Script: "./tests/performance/k6LoadTest.js",
    jmeterFile: "./tests/performance/jmeterTest.jmx"
  }
};

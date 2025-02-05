const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.dalm1chat.online');
    await driver.findElement(By.name('q')).sendKeys('Node.js', Key.RETURN);
    await driver.wait(until.titleContains('Node.js'), 5000);
    console.log("Test Selenium réussi.");
  } finally {
    await driver.quit();
  }
})();

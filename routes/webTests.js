const express = require('express');
const router = express.Router();
const { Builder, By, until } = require('selenium-webdriver');
const config = require('../config/testConfig');

router.post('/run', async (req, res) => {
  const { testUrl } = req.body;

  let driver = await new Builder().forBrowser(config.selenium.browser).build();

  try {
    await driver.get(testUrl);

    // Vérifier si le titre de la page contient "Accueil" (ou autre)
    let title = await driver.getTitle();
    if (title.includes("Accueil")) {
      res.status(200).send(`Test réussi : le titre de la page est "${title}".`);
    } else {
      res.status(400).send(`Test échoué : titre attendu différent, trouvé "${title}".`);
    }
  } catch (err) {
    res.status(500).send(`Erreur lors du test Selenium : ${err}`);
  } finally {
    await driver.quit();
  }
});

module.exports = router;

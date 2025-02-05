const express = require('express');
const { exec } = require('child_process');
const router = express.Router();
const config = require('../config/testConfig');

router.post('/run/k6', (req, res) => {
  const command = `k6 run ${config.performance.k6Script}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Erreur lors du test de charge k6 : ${stderr}`);
    } else {
      res.status(200).send(`Résultat du test de charge k6 : \n${stdout}`);
    }
  });
});

module.exports = router;

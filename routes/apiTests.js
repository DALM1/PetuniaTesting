const express = require('express');
const { exec } = require('child_process');
const router = express.Router();
const config = require('../config/testConfig');

router.post('/run', (req, res) => {
  const command = `newman run ${config.postman.collection}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(`Erreur lors de l'exécution du test Postman : ${stderr}`);
    } else {
      res.status(200).send(`Résultat des tests : \n${stdout}`);
    }
  });
});

module.exports = router;

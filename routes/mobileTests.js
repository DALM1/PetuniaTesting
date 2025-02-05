const express = require('express');
const router = express.Router();

router.post('/run', (req, res) => {
  res.send('Mobile tests triggered successfully!');
});

module.exports = router;

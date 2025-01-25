// src/routes/cryptoRoutes.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to get the price of a single cryptocurrency
router.get('/crypto/:id', async (req, res) => {
  const cryptoId = req.params.id.toLowerCase();
  
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
    if (response.data[cryptoId]) {
      res.json({
        crypto: cryptoId,
        price: response.data[cryptoId].usd
      });
    } else {
      res.status(404).json({ message: 'Cryptocurrency not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

module.exports = router;

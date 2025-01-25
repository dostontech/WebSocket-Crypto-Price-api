// src/controllers/cryptoController.js
const axios = require('axios');

// Fetch the price of a single cryptocurrency (by symbol)
const getCryptoPrice = async (req, res) => {
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
};

// Fetch prices for a list of popular cryptocurrencies
const getAllCryptoPrices = async (req, res) => {
  const cryptoIds = ['bitcoin', 'ethereum', 'litecoin', 'ripple']; // Add more as needed
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds.join(',')}&vs_currencies=usd`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
};

module.exports = { getCryptoPrice, getAllCryptoPrices };

const express = require('express');
const WebSocket = require('ws');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Initialize server and WebSocket
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const wss = new WebSocket.Server({ server });

// Fetch cryptocurrency price from CoinGecko API
const fetchCryptoPrice = async (symbol = 'bitcoin') => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
    return response.data[symbol].usd; // Return the price in USD
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    return null;
  }
};

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send crypto price every 5 seconds
  const interval = setInterval(async () => {
    const price = await fetchCryptoPrice('bitcoin'); // Fetch Bitcoin price
    if (price !== null) {
      ws.send(JSON.stringify({ symbol: 'bitcoin', price }));
    }
  }, 5000);

  // Log any messages from the client
  ws.on('message', (message) => {
    console.log('Received message:', message);
  });

  // Handle disconnection
  ws.on('close', () => {
    clearInterval(interval); // Clear interval when client disconnects
    console.log('Client disconnected');
  });
});

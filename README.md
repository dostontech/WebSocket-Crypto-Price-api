# Crypto Price API with WebSocket

This project provides a WebSocket-based API for fetching real-time cryptocurrency prices using the [CoinGecko API](https://www.coingecko.com/en/api). The server streams live cryptocurrency prices to connected WebSocket clients.

---

## Features

- Fetch real-time cryptocurrency prices from the CoinGecko API.
- Stream price updates to connected WebSocket clients.
- Simple setup and lightweight design.

---

## Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dostontech/crypto-price-api.git
   cd crypto-price-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Connect to the WebSocket server:

   Use a WebSocket client like [wscat](https://github.com/websockets/wscat) to connect to the WebSocket server.

   ```bash
   wscat -c ws://localhost:3000
   ```

   You will receive real-time cryptocurrency price updates in JSON format:

   ```json
   {"symbol":"bitcoin","price":43710.45}
   ```

---

## How It Works

1. **Express Server**:
   - The server is built using Express.js and serves as the base for the WebSocket.

2. **WebSocket Integration**:
   - The WebSocket server pushes real-time cryptocurrency prices to connected clients.

3. **Fetching Prices**:
   - Cryptocurrency prices are fetched from the CoinGecko API every 5 seconds.

---

## Dependencies

- [express](https://www.npmjs.com/package/express): Web server framework.
- [ws](https://www.npmjs.com/package/ws): WebSocket server implementation.
- [axios](https://www.npmjs.com/package/axios): HTTP client for fetching cryptocurrency prices.
- [cors](https://www.npmjs.com/package/cors): Cross-Origin Resource Sharing middleware.

---

## API Reference

### WebSocket Endpoint

- **Endpoint**: `ws://localhost:3000`
- **Message Format**: JSON
- **Example Response**:
  ```json
  {
    "symbol": "bitcoin",
    "price": 43710.45
  }
  ```

---

## Customization

1. **Change Cryptocurrency**:
   To fetch prices for a different cryptocurrency, modify the `fetchCryptoPrice` function in `src/app.js`:

   ```javascript
   const price = await fetchCryptoPrice('ethereum'); // Replace 'ethereum' with the desired symbol
   ```

2. **Adjust Fetch Interval**:
   Modify the interval duration (default: 5000 ms) for fetching prices in `src/app.js`:

   ```javascript
   setInterval(async () => {
     // Fetch price logic
   }, 5000); // Adjust interval in milliseconds
   ```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any issues or inquiries, feel free to contact:

- **Name**: Doston
- **Email**: dbekk1i@gmail.com


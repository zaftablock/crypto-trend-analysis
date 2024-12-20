document.addEventListener('DOMContentLoaded', () => {
  const cryptoDataContainer = document.getElementById('crypto-data');

  const API_KEY = 'YOUR_COINGLASS_API_KEY'; // Ganti dengan API key Anda

  async function fetchCryptoData() {
    try {
      const response = await fetch('https://open-api.coinglass.com/api/pro/v1/futures/openInterest', {
        headers: {
          'accept': 'application/json',
          'coinglassSecret': API_KEY
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      displayCryptoData(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      cryptoDataContainer.innerHTML = '<p>Gagal memuat data cryptocurrency.</p>';
    }
  }

  function displayCryptoData(cryptoList) {
    cryptoDataContainer.innerHTML = '';

    cryptoList.slice(0, 5).forEach(crypto => {
      const cryptoItem = document.createElement('div');
      cryptoItem.classList.add('crypto-item');

      cryptoItem.innerHTML = `
        <span><strong>${crypto.symbol}</strong></span>
        <span>Open Interest: $${parseFloat(crypto.openInterest).toLocaleString()}</span>
      `;

      cryptoDataContainer.appendChild(cryptoItem);
    });
  }

  fetchCryptoData();
});

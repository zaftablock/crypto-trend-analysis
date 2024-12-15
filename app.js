// Inisialisasi widget TradingView
new TradingView.widget({
    container_id: "chart",
    width: "100%",
    height: 500,
    symbol: "BINANCE:BTCUSDT", // Contoh simbol BTC/USDT di Binance
    interval: "D",            // Interval harian
    timezone: "Etc/UTC",
    theme: "light",
    style: "1",
    locale: "en",
    enable_publishing: false,
    allow_symbol_change: true,
    details: true,
    hotlist: true,
    calendar: true,
});

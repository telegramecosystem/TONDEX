import React, { useState } from 'react';
import './Swap.scss';

const Swap = () => {
  // Initialize state for both currencies
  const [fromCurrency, setFromCurrency] = useState('TON');
  const [toCurrency, setToCurrency] = useState('SCALE');

  // Function to handle the swap of currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="swap-container">
      <div className="swap-header">
        <h1>Swap</h1>
        <button className="settings-button">⚙️</button>
      </div>
      <div className="swap-body">
        <div className="swap-section">
          <label htmlFor="from-amount">From</label>
          <input type="text" id="from-amount" placeholder="0" />
          <span className="currency">{fromCurrency}</span>
          <div className="balance">≈ $0</div>
        </div>
        <div className="swap-arrow" onClick={handleSwap}>
          <span>↕️</span>
        </div>
        <div className="swap-section">
          <label htmlFor="to-amount">To</label>
          <input type="text" id="to-amount" placeholder="0" />
          <span className="currency">{toCurrency}</span>
          <div className="balance">≈ $0</div>
        </div>
      </div>
      <button className="connect-wallet-button">Connect Wallet</button>
    </div>
  );
};

export default Swap;

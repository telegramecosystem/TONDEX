import React, { useState } from 'react';
import './Bridge.scss';

const Bridge = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  // You would have functions to handle the asset transfer logic
  // For example, a function to calculate the received amount when the user enters an amount

  return (
    <div className="bridge-container">
      <h1>Bridge assets</h1>
      <div className="asset-selector">
        <button>Ethereum</button>
        <span className="exchange-icon">→</span>
        <button>TON</button>
      </div>
      <div className="asset-input">
        <label htmlFor="fromAmount">Asset</label>
        <select name="assets" id="fromAsset">
          <option value="wton">WTON</option>
          {/* Add more options based on your supported assets */}
        </select>
        <input 
          type="number" 
          id="fromAmount" 
          value={fromAmount}
          onChange={e => setFromAmount(e.target.value)}
          placeholder="0" 
        />
      </div>
      <div className="asset-input">
        <label htmlFor="toAmount">You will receive</label>
        <select name="assets" id="toAsset">
          <option value="ton">TON</option>
          {/* Add more options based on your supported assets */}
        </select>
        <input 
          type="number" 
          id="toAmount" 
          value={toAmount}
          onChange={e => setToAmount(e.target.value)}
          placeholder="0"
          disabled // This field can be calculated based on fromAmount or input by the user
        />
      </div>
      <button className="connect-wallet-button">Connect Wallet</button>
    </div>
  );
};

export default Bridge;

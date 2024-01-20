// Portfolio.tsx
import React, { useState, useEffect } from 'react';
import './Portfolio.scss';
import WalletInfo from '../WalletInfo/WalletInfo';
import AddressInfo from '../WalletInfo/AddressInfo';

// Placeholder function for fetching wallet information.
// You need to implement this to interact with the TON blockchain.
const getWalletInfo = async () => {
  // This should return an object with the wallet address, net worth, 
  // balance, rewards, and liquidity positions after fetching from TON blockchain.
  return {
    address: <AddressInfo />,
    netWorth: '$0.00',
    walletBalance: { TON: '0 TON', value: '$0.00' },
    rewards: '$0',
    liquidityPositions: '$0'
  };
};

const Portfolio = () => {
  const [walletAddress, setWalletAddress] = useState('...');
  const [netWorth, setNetWorth] = useState('$0.00');
  const [walletBalance, setWalletBalance] = useState({ TON: '0 TON', value: '$0.00' });
  const [rewards, setRewards] = useState('$0');
  const [liquidityPositions, setLiquidityPositions] = useState('$0');

  useEffect(() => {
    const fetchWalletInfo = async () => {
      try {
        const info = await getWalletInfo();
        setWalletAddress(info.address);
        setNetWorth(info.netWorth);
        setWalletBalance(info.walletBalance);
        setRewards(info.rewards);
        setLiquidityPositions(info.liquidityPositions);
      } catch (error) {
        console.error('Failed to fetch wallet info:', error);
      }
    };

    fetchWalletInfo();
  }, []);

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <WalletInfo />
        <div className="wallet-address">{walletAddress}</div>
        <div className="net-worth">Net Worth <span>{netWorth}</span></div>
      </div>
      <div className="wallet-info">
        <div className="wallet-section">
          <div className="section-title">Wallet</div>
          <div className="wallet-contents">
            <span className="token-name">{Object.keys(walletBalance)[0]}</span>
            <span className="token-value">{Object.values(walletBalance)[0]}</span>
          </div>
        </div>
        <div className="rewards-section">
          <div className="section-title">My Rewards</div>
          <div className="rewards-contents">{rewards}</div>
          <div className="rewards-description">
            You can earn extra rewards by supplying liquidity.
          </div>
          <button className="view-rewards-button">View all pools with rewards</button>
        </div>
        <div className="liquidity-section">
          <div className="section-title">Liquidity Positions</div>
          <div className="liquidity-contents">{liquidityPositions}</div>
          <button className="check-options-button">Check options</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

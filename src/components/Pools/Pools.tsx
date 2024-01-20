import React, { useState } from 'react';
import './Pools.scss';
import { Link } from 'react-router-dom';

const Pools = () => {
  const initialPoolData = [
    { pair: 'SCALE/TON', tvl: '$1.71M', volume: '$36.61K', fees: '$365.08', apy: '6.42%', apr: '6.22%' },
    { pair: 'DFC/TON', tvl: '$629.81K', volume: '$118.31K', fees: '$473.26', apy: '24.53%', apr: '21.94%' },
    { pair: 'RAFF/TON', tvl: '$594.37K', volume: '$26.99K', fees: '$107.95', apy: '5.45%', apr: '5.3%' },
    { pair: 'sTON/TON', tvl: '$350.1K', volume: '$769.14', fees: '$0.77', apy: '0.06%', apr: '0.06%' },
    { pair: 'TON/JUSDT', tvl: '$281.3K', volume: '$223.12K', fees: '$892.48', apy: '152.25%', apr: '92.64%' },
    // ... Add all other pairs as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [poolData] = useState(initialPoolData);

  // Filter pools based on search term
  const filteredPools = searchTerm.length === 0
    ? poolData
    : poolData.filter(pool => 
        pool.pair.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="pools-container">
      <div className="pools-header">
        <h1>Pools (186)</h1>
        <div className="pools-search-filters">
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm} 
            onChange={handleSearchChange} 
            className="pools-search-bar"
          />
          {/* Placeholder for additional filters */}
        </div>
        <button className="connect-wallet-button">Connect Wallet</button>
      </div>
      <div className="pools-content">
        <table className="pools-table">
          <thead>
            <tr>
              <th>Pair</th>
              <th>TVL</th>
              <th>Volume (24h)</th>
              <th>Fees (24h)</th>
              <th>APY / APR</th>
            </tr>
          </thead>
          <tbody>
            {filteredPools.map((pool, index) => (
              <tr key={index}>
                <td>{pool.pair}</td>
                <td>{pool.tvl}</td>
                <td>{pool.volume}</td>
                <td>{pool.fees}</td>
                <td>{pool.apy} / {pool.apr}</td>
                <td>
            {/*<Link to={`/chart/${pool.pair}`} className="chart-button">See Chart 📊</Link> */}

        <Link to={`/chart/${pool.pair.replace('/', '-')}`} className="chart-button">See Chart 📊</Link>

      </td> {/* New cell for Chart button */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="view-all">
          <a href="/pools">View all</a>
        </div>
      </div>
    </div>
  );
};

export default Pools;

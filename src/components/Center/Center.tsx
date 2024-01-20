import React from 'react';
import './center.scss';

const Center = () => {
  const tiles = [
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/swap', label: 'Swap' },
    { path: '/pools', label: 'Pools' },
    { path: '/bridge', label: 'Bridge' },
  ];

  return (
    <div className="center">
      {tiles.map((tile) => (
        <a key={tile.label} href={tile.path} className="tile">
          {tile.label}
        </a>
      ))}
    </div>
  );
};

export default Center;

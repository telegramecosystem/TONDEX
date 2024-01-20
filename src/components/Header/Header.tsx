import React from 'react';
import { Link } from 'react-router-dom'; // Importuj Link z react-router-dom
import { TonConnectButton } from "@tonconnect/ui-react";
import './header.scss';

export const Header = () => {
    return (
        <header>
            {/* Otocz logo i napis TONDEX komponentem Link, aby przekierowywały do strony głównej */}
            <Link to="/" className="logo-container">
                <img src="/block.png" alt="Block" className="logo" />
                <span>TONDEX</span>
            </Link>
            {/* Zastąp tagi <a> komponentami <Link> */}
            <nav className="navigation">
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/swap">Swap</Link>
                <Link to="/pools">Pools</Link>
                <Link to="/bridge">Bridge</Link>
            </nav>
            <TonConnectButton />
        </header>
    );
};

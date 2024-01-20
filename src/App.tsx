import React from 'react';
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { TxForm } from "./components/TxForm/TxForm";
import { Footer } from "./components/Footer/Footer";
import { TonProofDemo } from "./components/TonProofDemo/TonProofDemo";
import Center from './components/Center/Center';
import Portfolio from './components/Portfolio/Portfolio';
import Swap from './components/Swap/Swap';
import Pools from './components/Pools/Pools';
import Bridge from './components/Bridge/Bridge';
import Chart from './components/Chart/Chart'; 
import './App.scss';

function App() {
  return (
    <TonConnectUIProvider
        manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
        actionsConfiguration={{
            twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo'
        }}
    >
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Center />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/bridge" element={<Bridge />} />
            <Route path="/chart/:pair" element={<Chart />} />
            {/* You can add more routes here as needed */}
          </Routes>
          <TxForm />
          <TonProofDemo />
          <Footer />
        </div>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;

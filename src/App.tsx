import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomeConsumption from './components/HomeConsumption';
import Transfer from './components/Transfer';
import Loan from './components/Loan';
import Credit from './components/Credit';
import Investment from './components/Investment';
import DailyFinance from './components/DailyFinance';
import Business from './components/Business';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HomeConsumption />
        <Transfer />
        <Loan />
        <Credit />
        <Investment />
        <DailyFinance />
        <Business />
      </main>
      <Footer />
    </div>
  );
}

export default App;

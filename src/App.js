import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import PieChart from './components/PieChart';
import { GlobalContextProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />

        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;

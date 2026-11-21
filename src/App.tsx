import './App.css'
import { useState } from 'react'

import { Calculator, Wallet } from 'lucide-react';
import LoanForm from './components/LoanForm';

function App() {
  const [loanData, setLoanData] = useState({
    principal: 0,
    annualInterestRate: 0,
    repaymentPeriod: 0
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLoanDataChange = (field: keyof typeof loanData, value: number) => {
    setLoanData({
      ...loanData,
      [field]: value
    });
  };



  return (
    <div className="App-Container">
      <header className='App-Header'>
        <div className='brand'>
          <div className='brand-icon'>
            <Wallet size={24} />
          </div>
          <div className='brand-text'>
            <h1>Loan Calculator</h1>
            <p>Simplified Loan Calcultor</p>
          </div>
        </div>
        <div className='header-label'>
          <Calculator size={18} />
          <span>Calculator</span>
        </div>
      </header>
      <main className='main-content'>
        <section className='welcome-section'>
          <h2>Welcome to the Loan Calculator</h2>
          <p>Calculate your loan payments with ease.</p>
        </section>
        <div className='claculator-layout'>
          <LoanForm 
          loanData={loanData}
          onLoanDataChange={handleLoanDataChange}
          />
        </div>
      </main>
    </div>
  )
}

export default App

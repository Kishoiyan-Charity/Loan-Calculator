import type { LoanFormData } from "../types/loan.types";

interface LoanSummaryProps {
  loanData: LoanFormData;
  
}

function LoanSummary({ result }: LoanSummaryProps) {
    const formatCurrency = (amount: number) => {
        return Intl.NumberFormat("en-Ke", {
            style: "currency",
            currency: "USD",
        }).format(amount);
    };

    return (
        <div className="loan-summary">
            <h2>Loan Summary</h2>
        </div>
    );
}

export default LoanSummary;
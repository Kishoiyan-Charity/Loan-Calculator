import type { LoanFormData  } from "../types/loan.types";

interface LoanFormProps {
    loanData: LoanFormData;  //property of type LoanFormData
    onLoanDataChange: (
        field: keyof LoanFormData,
        value: number
    ) => void;
}
function LoanForm({ 
    loanData,
    onLoanDataChange,
    
}: LoanFormProps) {
    return (
        <div className="loan-form">
            <div className="section-header">
                <h2>Loan Details</h2>
                <p>Enter your loan information below:</p>
            </div>
            <div className="form-group">
                    <label>
                Principal:
                <input
                    type="number"
                    value={loanData.principal}
                    onChange={(e) =>
                        onLoanDataChange("principal", parseFloat(e.target.value))
                    }
                />
            </label>
            <label>
                Annual Interest Rate (%):
                <input
                    type="number"
                    value={loanData.annualInterestRate}
                    onChange={(e) =>
                        onLoanDataChange(
                            "annualInterestRate",
                            parseFloat(e.target.value)
                        )
                    }
                />
            </label>
            <label>
                Repayment Period (years):
                <input
                    type="number"
                    value={loanData.repaymentPeriod}
                    onChange={(e) =>
                        onLoanDataChange(
                            "repaymentPeriod",
                            parseFloat(e.target.value)
                        )
                    }
                />
            </label>
            </div>
        

        </div>
    )
}
export default LoanForm
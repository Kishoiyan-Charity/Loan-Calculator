//an interface is a way of defining the structure of an object. 
// It specifies what properties an object should have and what data types those properties should contain.
export interface LoanFormData {
    principal: number;
    annualInterestRate: number;
    repaymentPeriod: number;   
}

export interface LoanResult {
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;   
}
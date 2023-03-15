import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { number } from 'yup';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.tableData = this.getTableData();
  }

  loanAmount: number = 30000;
  noOfMonths: number = 120;
  roi: number = 10;
  roiPerMonth: any;
  monthlyEmi = 1106.65;
  totalAmountPayable = 33199.49;
  totalInterest = 3199.49;
  interestPercentage = 9.64;
  interestTable = 906.65;
  Principle = 200.0;
  Endingbal = 29093.35;
  tableData: any;

  calculate(loan: any, months: any, roi: any) {
    this.roiPerMonth = roi / 1200;
    this.monthlyEmi =
      (loan * this.roiPerMonth * Math.pow(1 + this.roiPerMonth, months)) /
      (Math.pow(1 + this.roiPerMonth, months) - 1);
    this.totalAmountPayable = this.monthlyEmi * months;
    this.totalInterest = this.totalAmountPayable - loan;
    this.interestPercentage =
      (this.totalInterest / this.totalAmountPayable) * 100;
    this.interestTable = this.roiPerMonth * loan;
    this.Principle = this.monthlyEmi - this.interestTable;
    this.Endingbal = loan - this.Principle;
  }
  loan(value: any) {
    this.loanAmount = value;
    this.calculate(value, this.noOfMonths, this.roi);
    this.tableData = this.getTableData();
  }
  monthsFunction(month: any) {
    this.noOfMonths = month;
    this.calculate(this.loanAmount, month, this.roi);
    this.tableData = this.getTableData();
  }
  rateFunction(interest: any) {
    this.roi = interest;
    this.calculate(this.loanAmount, this.noOfMonths, interest);
    this.tableData = this.getTableData();
    // console.log(this.tableData);
  }
  // trackByIndex(index: number, obj: any): any {
  //   return index;
  // }
  // dataForTable(){

  //   this.totalInterest = this.totalAmountPayable - this.loanAmount;
  //   this.interestPercentage=(this.totalInterest / this.totalAmountPayable)*100;
  //   this.interestTable=this.roiPerMonth*this.loanAmount

  // }

  getTableData() {
    let obj: any[] = [];
    let tableBeggingBalance = this.loanAmount;
    let tableEmi = this.monthlyEmi;
    let interestAmount = (this.roi / 1200) * tableBeggingBalance;
    let tablePrinciple = tableEmi - interestAmount;
    let tableEndingBalance = this.loanAmount - tablePrinciple;
    for (let i = 0; i < this.noOfMonths; i++) {
      let dupObj = {
        one: tableBeggingBalance,
        two: tableEmi,
        three: tablePrinciple,
        four: interestAmount,
        five: tableEndingBalance,
      };
      obj.push(dupObj);
      tableBeggingBalance = tableEndingBalance;
      tableEndingBalance = tableBeggingBalance - tablePrinciple;
      interestAmount = (this.roi / 1200) * tableBeggingBalance;
      tablePrinciple = tableEmi - interestAmount;
    }
    return obj;
  }
}

// Formula for EMI Calculation is -
// P x R x (1+R)^N / [(1+R)^N-1] where-
// P = Principal loan amount
// N = Loan tenure in months
// R = Monthly interest rate

// For example, If a person avails a loan of Rs 10,00,000 at an annual interest rate of 7.2% for a tenure of 120 months (10 years), then his EMI will be calculated as under:
// EMI= Rs 10,00,000  0.006  (1 + 0.006)120 / ((1 + 0.006)120 - 1) = Rs 11,714.
// The total amount payable will be Rs 11,714 * 120 = Rs 14,05,703. Principal loan amount is Rs 10,00,000 and the Interest amount will be Rs 4,05,703.

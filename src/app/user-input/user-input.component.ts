import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  inputInitialInvestment = signal('0'); //when using signals you just have to wrap the default item in the bracket and the signal reads the type of the item inside
  inputAnnualInvestment = signal('0');
  inputExpectedReturn = signal('10');
  inputDuration = signal('5');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.inputInitialInvestment(),
      annualInvestment: +this.inputAnnualInvestment(),
      expectedReturn: +this.inputExpectedReturn(),
      duration: +this.inputDuration(), //brackets are added for this so we are able to read the data in the item itself rather than emitting the whole signal. 
  });
    this.inputInitialInvestment.set('0');
    this.inputAnnualInvestment.set('0');
    this.inputExpectedReturn.set('5');
    this.inputDuration.set('10');
  }

}

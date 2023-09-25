import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hw2';
  currencies: string[] = []; // Array to store currency codes
  CurrencyMap:any; 
  currency1: string = 'USD';
  currency2: string = 'EUR';
  amount1: number = 0;
  amount2: number = 0;

  constructor(private currencyService: CurrencyService){}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data: any) => {
      this.currencies = Object.keys(data.conversion_rates);
      this.CurrencyMap = data.conversion_rates;
    });
  }

  convertCurrency() {
    this.amount2 = this.amount1 * (this.CurrencyMap[this.currency2] / this.CurrencyMap[this.currency1]);
  }

  convertCurrencyOpposite() {
    this.amount1 = this.amount2 * (this.CurrencyMap[this.currency1] / this.CurrencyMap[this.currency2]);
  }

}

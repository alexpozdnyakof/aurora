import { Observable, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { MessageService } from '@app/services/message.service';
import { Sales } from '@app/models/sales.model';
import { SalesManager } from '@app/models/salesManager.model';
import { Loans } from '@app/models/loans.model';
import { LoanManager } from '@app/models/loanManager.model';

@Component({
  selector: 'rosa-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aurora';
  public data: any[];
  public interval: any;
  public updateDate: any;
  public bankSales: Sales;
  public ManagerSales: SalesManager[] = [];
  public bankLoans: Loans;
  public ManagerLoans: LoanManager[] = [];
  public BankStats$: any;
  public SalesManagers$: any;
  public LoansManagers$: any;
  public LoansBank$: any;
  public isChanged: boolean = false;
  public isNight: boolean = false;
  public order: any = 'rn';
  public ascending = true;
  constructor(
    private _statService: DataService,
    private _message: MessageService
    ) { }






    public updateBankStats(): void {
      this.updateDate = Date.now();
      this._statService.updateData(); // simply signal for the service to update its data stream
    }

    public ngOnInit(): void {
      this.updateDate = Date.now();
      this._statService.accountBank$.subscribe(data => { // subscribe once to the data stream
        this.BankStats$ = data;
        console.log(this.BankStats$);
    });

    this._statService.accountManagers$.subscribe(data => { // subscribe once to the data stream
      this.SalesManagers$ = data;
      console.log(this.SalesManagers$);
  });
  this._statService.loansManagers$.subscribe(data => { // subscribe once to the data stream
    this.LoansManagers$ = data;
    console.log(this.LoansManagers$);
});

this._statService.loansBank$.subscribe(data => { // subscribe once to the data stream
  this.LoansBank$ = data;
  console.log(this.LoansBank$);
});

    this.interval = setInterval(() => {
      const date = new Date();
     if (date.getHours() > 17) {
      this.isChanged = true;
      this.isNight = true;
      setTimeout(() => { this.isChanged = false; }, 1000);
     }
        console.log('im working');
        this.updateBankStats();
    }, 15000); // 1800000

      }

    }





      /*
          Account Bank: [{"fct":26413971,"pln":"1.53536e+09","rr":"0.65 %","fct_today_opn":null,"fct_today_in_work":null,"val_left":null}]


      rosa-card('[value]' = "accountStats[0].fct_today_opn" '[title]' = "'сегодня'")
        rosa-card('[value]' = "accountStats[0].fct" '[title]' = "'Сентябрь Факт'")
        rosa-card('[value]' = "accountStats[0].fct_today_in_work" '[title]' = "'Middle'")
        rosa-card('[value]' = "accountStats[0].rr" '[title]' = "'Run Rate'")
      */

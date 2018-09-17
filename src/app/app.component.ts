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
  public bankSales: Sales;
  public ManagerSales: SalesManager[] = [];
  public bankLoans: Loans;
  public ManagerLoans: LoanManager[] = [];


  constructor(
    private _statService: DataService,
    private _message: MessageService
    ) { }

    public updateDate: number;
    public  ngOnInit(): void {
      this._statService.getStats().subscribe(
        ([res1, res2, res3, res4]) => {
         this.ManagerLoans = res1;
         this.bankLoans = res2[0];
         this.ManagerSales = res3;
         this.bankSales = res4[0];
         this.updateDate = Date.now();
        },
        error => {
          console.error(`Error ${JSON.stringify(error)}`);
          this._message.warn(`Ошибка: ${JSON.stringify(error)}`);
          return throwError(error);
        });

        setInterval(() => {
         this.ngOnInit();
         }, 1800000);
      }

    }





      /*
          Account Bank: [{"fct":26413971,"pln":"1.53536e+09","rr":"0.65 %","fct_today_opn":null,"fct_today_in_work":null,"val_left":null}]


      rosa-card('[value]' = "accountStats[0].fct_today_opn" '[title]' = "'сегодня'")
        rosa-card('[value]' = "accountStats[0].fct" '[title]' = "'Сентябрь Факт'")
        rosa-card('[value]' = "accountStats[0].fct_today_in_work" '[title]' = "'Middle'")
        rosa-card('[value]' = "accountStats[0].rr" '[title]' = "'Run Rate'")
      */

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders  } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, Subject, forkJoin, BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Sales } from '@app/models/sales.model';
import { SalesManager } from '@app/models/salesManager.model';
import { LoanManager } from '@app/models/loanManager.model';
import { Loans } from '@app/models/loans.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _stats: Observable<any[]>;
  public accountBank$: BehaviorSubject<Sales[]> = new BehaviorSubject<Sales[]>([]);
  public accountManagers$: BehaviorSubject<SalesManager[]> = new BehaviorSubject<SalesManager[]>([]);
  public loansManagers$: BehaviorSubject<LoanManager[]> = new BehaviorSubject<LoanManager[]>([]);
  public loansBank$: BehaviorSubject<Loans[]> = new BehaviorSubject<Loans[]>([]);

  constructor(private _http: HttpClient) {
    this.updateData();
  }


  public updateData(): void {
    this.updateAccountBank();
    this.updateAccountManagers();
    this.updateLoansManagers();
    this.updateLoansBank();
  }

  public updateLoansBank() {
    return this._http.get((`${environment.loanBank}`)).subscribe(
      res => {
        return (<Object[]>res).map((loans: any) => {
          this.loansBank$.next(loans);
        });
      });
  }

  public updateLoansManagers() {
    return this._http.get((`${environment.loanManagers}`)).subscribe(
      res => {
        this.loansManagers$.next(<LoanManager[]>res);
      });
  }

  public updateAccountBank() {
    return this._http.get((`${environment.accountBank}`)).subscribe(
      res => {
        return (<Object[]>res).map((sale: any) => {
          this.accountBank$.next(sale);
        });
      });
}

public updateAccountManagers() {
  return this._http.get((`${environment.accountManagers}`)).subscribe(
    res => {
      this.accountManagers$.next(<SalesManager[]>res);
    });
}


  public getStats(): Observable<any[]> {
    return forkJoin(
      this._http.get((`${environment.loanManagers}`)),
      this._http.get((`${environment.loanBank}`)),
      this._http.get((`${environment.accountManagers}`)),
      this._http.get((`${environment.accountBank}`))
  );
  }
}

import { Injectable } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Sales } from '@app/models/sales.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _sales$: BehaviorSubject<Sales[]> =  new BehaviorSubject<Sales[]>([]);
  constructor(private _backend: DataService) {
   // this.loadData();
   // this._backend.updateAccountBank();
   }
  }

  /*
   public loadData() {

    this._backend.updateAccountBank()
    .subscribe(
        res => {

            // tslint:disable-next-line:max-line-length
            const newSale = this.newMethod(res);


            this._sales$.next(newSale);
        },
        err => console.log('Error retrieving Sales')
    );

   }
  */
 /*
  private newMethod(res: Object) {
    // tslint:disable-next-line:max-line-length
    return (<Object[]>res.json()).map((sale: any) => new Sales({ fct: sale.fct, fct_today_in_work: sale.fct_today_in_work, fct_today_opn: sale.fct_today_opn, pln: sale.pln, rr: sale.this.rr, val_left: sale.val_left}));
  }

   get sales() {
    return this._sales$.asObservable();
  }
  */




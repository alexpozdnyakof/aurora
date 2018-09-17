import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders  } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, Subject, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _stats: Observable<any[]>;
  constructor(private _http: HttpClient) {
    // tslint:disable-next-line:semicolon

  //  return this._http.get(`${environment.getStats}`).subscribe( (res: Response) => return res );
   // .map((res: HttpResponse<any>) => { console.log(`res leads ${res}`);  return (<any>res); });
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

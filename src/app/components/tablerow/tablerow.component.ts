import { SalesManager } from '@app/models/salesManager.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-tablerow',
  templateUrl: './tablerow.component.pug',
  styleUrls: ['./tablerow.component.scss']
})
export class TablerowComponent implements OnInit {
  @Input()
  public index: number;
  @Input()
  public username: string;
  @Input()
  public value: any[];
  @Input()
  public userpic: string;
  @Input()
  public place: any;
  @Input()
  public runrate: string;
  @Input()
  public manager: SalesManager;

  constructor() { }

  ngOnInit() {
   // this.userpic = `assets/${this.userpic}`;
    // console.log(this.username);
  }

}

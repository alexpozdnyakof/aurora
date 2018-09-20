import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Flip } from 'number-flip';

@Component({
  selector: 'rosa-card',
  templateUrl: './card.component.pug',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  public value: any;
  @Input()
  public title: string;

  public _value: string;
  public isChanged: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const value: SimpleChange = changes.value;
    console.log('prev value: ', value.previousValue);
    console.log('got name: ', value.currentValue);
    this.isChanged = true;
    setTimeout(() => { this.isChanged = false; }, 1000);
    this._value = value.currentValue;
    console.log('im changed');
  }
  ngOnInit() {
     /*if (typeof this.value !== 'string' && this.value !== 0) {
      // tslint:disable-next-line:no-unused-expression
      const countedValue = 1000;
      // tslint:disable-next-line:no-unused-expression
     const flip =  new Flip({
        node: document.querySelector('.flip'),
        from: 0,
        to: countedValue
      });
    }*/
    // console.log(this.value);
    // console.log(typeof this.value);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rosa-card',
  templateUrl: './card.component.pug',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public value: any;
  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
    console.log(this.value);
    console.log(typeof this.value);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Notify, NotifyType } from '@app/models/notify.model';
import { MessageService } from '@app/services/message.service';

@Component({
  selector: 'rosa-message',
  templateUrl: './message.component.pug',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public notifys: Notify[] = [];

  public status: string;

  public message: string;
  public show: boolean = false;

  constructor(private _messageService: MessageService) { }
  public showMessage(status, message): void {
    this.status = status;
    this.message = message;
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3800);
  }

  ngOnInit() {
    this._messageService.getNotify().subscribe((notify: Notify) => {
      if (!notify) {
          this.notifys = [];
          return;
      }
      this.notifys = [];

      this.notifys.push(notify);
      setTimeout(() => { this.removeNotify(notify); }, 5500);
  });
  }

  removeNotify(notify: Notify) {
    this.notifys = this.notifys.filter(x => x !== notify);
  }
  cssClass(notify: Notify) {
      if (!notify) {
          return;
      }
      switch (notify.type) {
          case NotifyType.success:
              return 'success notify-show';
          case NotifyType.error:
              return 'error notify-show';
          case NotifyType.info:
              return 'info notify-show';
          case NotifyType.warning:
              return 'warning notify-show';
      }
  }
}




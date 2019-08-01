import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-myteseo-left',
  templateUrl: './myteseo-left.component.html',
  styleUrls: ['./myteseo-left.component.css']
})
export class MyteseoLeftComponent implements OnInit {
  username: string;
  @Output() viewEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.username = this.getRandomString();

  }
  private getRandomString(): string {
    let outString: string = '';
    const inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }

  toggleView(viewSelected: string) {
    this.viewEvent.emit(viewSelected);
  }
}

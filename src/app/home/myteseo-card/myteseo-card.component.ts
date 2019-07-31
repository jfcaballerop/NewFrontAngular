import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myteseo-card',
  templateUrl: './myteseo-card.component.html',
  styleUrls: ['./myteseo-card.component.css']
})
export class MyteseoCardComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
    this.username =  this.getRandomString();
  }

  private getRandomString(): string {
    let outString: string = '';
    const inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }
}

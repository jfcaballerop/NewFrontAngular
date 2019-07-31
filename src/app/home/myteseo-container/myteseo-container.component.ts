import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myteseo-container',
  templateUrl: './myteseo-container.component.html',
  styleUrls: ['./myteseo-container.component.css']
})
export class MyteseoContainerComponent implements OnInit {

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

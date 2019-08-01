import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myteseo-container',
  templateUrl: './myteseo-container.component.html',
  styleUrls: ['./myteseo-container.component.css']
})
export class MyteseoContainerComponent implements OnInit {

  username: string;
  view: string;

  constructor() { }

  ngOnInit() {
    this.view = 'none';
  }

  receiveView($event) {
    this.view = $event;
  }
}

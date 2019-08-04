import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myteseo-left',
  templateUrl: './myteseo-left.component.html',
  styleUrls: ['./myteseo-left.component.css']
})
export class MyteseoLeftComponent implements OnInit {
  username: string = '';
  @Output() viewEvent = new EventEmitter<string>();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {

    if (this.authenticationService.currentUserValue) {
      this.username = this.authenticationService.currentUserValue.username;
    }
  }

  ngOnInit() {
    this.username = (this.username === '' ? this.getRandomString() : this.username);

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
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

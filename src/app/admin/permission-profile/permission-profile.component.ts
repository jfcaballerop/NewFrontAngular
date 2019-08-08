import { Component, OnInit } from '@angular/core';
import { PermissionProfile } from 'src/app/models/permission-profile';
import { PermissionProfileService } from 'src/app/services/permission-profile.service';

@Component({
  selector: 'app-permission-profile',
  templateUrl: './permission-profile.component.html',
  styleUrls: ['./permission-profile.component.css']
})
export class PermissionProfileComponent implements OnInit {
  displayedColumns: string[] = ['Role_Id', 'Role_Name'];
  data: PermissionProfile[] = [];
  isLoadingResults = true;

  constructor(
    private rolesSVC: PermissionProfileService
  ) { }

  ngOnInit() {

    this.rolesSVC.findAll()
      .subscribe(res => {
        this.data = res['roles'];
        console.log(this.data);
        this.isLoadingResults = false;
      },
        err => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}

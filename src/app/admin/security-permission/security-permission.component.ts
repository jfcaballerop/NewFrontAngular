import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-security-permission',
  templateUrl: './security-permission.component.html',
  styleUrls: ['./security-permission.component.css'],
  providers: [PermissionService, DecimalPipe]
})
export class SecurityPermissionComponent implements OnInit {
  permisos: Array<Permission>;

  constructor(
    private permissionSvc: PermissionService
  ) { }

  ngOnInit() {
    this.permissionSvc.getAllPermissions().subscribe(
      data => {
        console.log(data);
        if (data['permisos'] === undefined) {
          alert('No existen permisos en la BD');
        } else if (data['permisos'].length === 0) {
          alert('No existen permisos');
        } else {
          this.permisos = data['permisos'];
        }
      },
      error => {
        console.log(error);
        alert(error.message);
      }
    );
  }

}

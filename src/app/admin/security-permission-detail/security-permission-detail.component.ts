import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/app/models/Permission';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PermissionService } from 'src/app/services/permission.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-security-permission-detail',
  templateUrl: './security-permission-detail.component.html',
  styleUrls: ['./security-permission-detail.component.css']
})
export class SecurityPermissionDetailComponent implements OnInit {
  permissions$: Observable<Permission>;
  permission: Permission;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private permissionSVC: PermissionService,
    private location: Location
    ) { }

  ngOnInit() {
    this.permissions$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.permissionSVC.findById(params.get('id'))
      )
    );
    this.permissions$.subscribe(r => this.permission = r);
  }

  onSubmit() {
    console.log(this.permission); // TODO hacer llamada al servidor
    this.router.navigate(['/admin/permissions']);
  }

  goBack() {
    this.location.back();
  }

}

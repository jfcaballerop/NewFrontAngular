import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';

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
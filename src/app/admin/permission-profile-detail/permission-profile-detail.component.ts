import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionProfile } from 'src/app/models/permission-profile';
import { PermissionProfileService } from 'src/app/services/permission-profile.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-permission-profile-detail',
  templateUrl: './permission-profile-detail.component.html',
  styleUrls: ['./permission-profile-detail.component.css']
})
export class PermissionProfileDetailComponent implements OnInit {
  profile$: Observable<PermissionProfile>;
  role: PermissionProfile;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private permProfileSVC: PermissionProfileService
  ) { }

  ngOnInit() {
    this.profile$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.permProfileSVC.findById(params.get('id'))
      )
    );
    this.profile$.subscribe(r => this.role = r);
  }

}

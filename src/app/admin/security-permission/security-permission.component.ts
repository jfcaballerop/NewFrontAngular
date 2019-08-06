import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';

function search(_permisos$: Permission[], text: string, pipe: PipeTransform): Permission[] {
  return _permisos$.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term);
    // || pipe.transform(country.area).includes(term)
    // || pipe.transform(country.population).includes(term);
  });
}

@Component({
  selector: 'app-security-permission',
  templateUrl: './security-permission.component.html',
  styleUrls: ['./security-permission.component.css'],
  providers: [PermissionService, DecimalPipe],
  encapsulation: ViewEncapsulation.None
})
export class SecurityPermissionComponent implements OnInit {
  permisos: Observable<Permission[]>;
  filter = new FormControl('');
  PERMISOS: Array<Permission>;
  
  constructor(
    private permissionSvc: PermissionService,
    pipe: DecimalPipe
  ) {
    this.permissionSvc.getAllPermissions().subscribe(
      data => {
        console.log(data);
        if (data['permisos'] === undefined) {
          alert('No existen permisos en la BD');
        } else if (data['permisos'].length === 0) {
          alert('No existen permisos');
        } else {
          this.PERMISOS = data['permisos'];
          this.permisos = this.filter.valueChanges.pipe(
            startWith(''),
            map(text => search(this.PERMISOS, text, pipe))
          );
        }
      },
      error => {
        console.log(error);
        alert(error.message);
      }
    );
    
    
  }

  ngOnInit() {
    
  }


}

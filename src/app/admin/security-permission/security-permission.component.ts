import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission } from 'src/app/models/permission';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/sortable.directive';
import { PermissionSortService } from '../services/permission-sort.service';

@Component({
  selector: 'app-security-permission',
  templateUrl: './security-permission.component.html',
  styleUrls: ['./security-permission.component.css'],
  providers: [PermissionSortService, DecimalPipe],
  encapsulation: ViewEncapsulation.None
})
export class SecurityPermissionComponent implements OnInit {
  permisos$: Observable<Permission[]>;
  total$: Observable<number>;
  // filter = new FormControl('');
  // PERMISOS: Array<Permission>;
  // page = 1;
  // pageSize = 10;
  // collectionSize: number;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  
  constructor(
    public service: PermissionSortService
  ) {
    this.permisos$ = service.permisos$;
    this.total$ = service.total$;

    // this.permissionSvc.getAllPermissions().subscribe(
    //   data => {
    //     console.log(data);
    //     if (data['permisos'] === undefined) {
    //       alert('No existen permisos en la BD');
    //     } else if (data['permisos'].length === 0) {
    //       alert('No existen permisos');
    //     } else {
    //       this.PERMISOS = data['permisos'];
    //       this.permisos = this.filter.valueChanges.pipe(
    //         startWith(''),
    //         map(text => search(this.PERMISOS, text, pipe))
    //       );
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //     alert(error.message);
    //   }
    // );
  }

  ngOnInit() {
  }
  
  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}

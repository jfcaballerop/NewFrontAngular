import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { Permission } from 'src/app/models/permission';
import { PermissionService } from 'src/app/services/permission.service';
import { SortDirection } from 'src/app/shared/directives/sortable.directive';
// import { COUNTRIES } from './permisos';


interface SearchResult {
  permisos: Permission[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(permisos: Permission[], column: string, direction: string): Permission[] {
  if (direction === '') {
    return permisos;
  } else {
    return [...permisos].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(country: Permission, term: string, pipe: PipeTransform) {
  return country.name.toLowerCase().includes(term.toLowerCase());
  // || pipe.transform(country.area).includes(term)
  // || pipe.transform(country.population).includes(term);
}

@Injectable({ providedIn: 'root' })
export class PermissionSortService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _permisos$ = new BehaviorSubject<Permission[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  PERMISOS: Array<Permission>;

  private _state: State = {
    page: 1,
    pageSize: 20,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(
    private pipe: DecimalPipe,
    private permissionSvc: PermissionService
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
          // this.permisos = this.filter.valueChanges.pipe(
          //   startWith(''),
          //   map(text => search(this.PERMISOS, text, pipe))
          // );
          this._search$.pipe(
            tap(() => this._loading$.next(true)),
            debounceTime(200),
            switchMap(() => this._search()),
            delay(200),
            tap(() => this._loading$.next(false))
          ).subscribe(result => {
            this._permisos$.next(result.permisos);
            this._total$.next(result.total);
          });

          this._search$.next();
        }
      },
      error => {
        console.log(error);
        alert(error.message);
      }
    );
  }

  get permisos$() { return this._permisos$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let permisos = sort(this.PERMISOS, sortColumn, sortDirection);

    // 2. filter
    permisos = permisos.filter(country => matches(country, searchTerm, this.pipe));
    const total = permisos.length;

    // 3. paginate
    permisos = permisos.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ permisos, total });
  }
}
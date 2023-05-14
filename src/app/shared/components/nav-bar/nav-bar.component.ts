import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LoginRegisterActions } from 'src/app/auth/store/state/auth/auth.actions';
import { LoginRegisterSelectors } from 'src/app/auth/store/state/auth/auth.selectors';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  isAuthenticated$ = this._store.select(LoginRegisterSelectors.isAuthenticated);

  constructor(private _store: Store) { }

  ngOnInit(): void {
  }

  onLogout(event: Event) {
    event.preventDefault();
    this._store.dispatch(LoginRegisterActions.sendLogout());
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthState } from './auth/store/state/data.state';
import { LoginRegisterSelectors } from './auth/store/state/auth/auth.selectors';
import { LoginRegisterActions } from './auth/store/state/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'advisor-project';

  showLoading: Observable<boolean>;
  constructor(private store: Store<IAuthState>) {}

  ngOnInit() {
    this.showLoading = this.store.select(LoginRegisterSelectors.loading);
    this.store.dispatch(LoginRegisterActions.autoLogin());
  }
}

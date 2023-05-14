import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DataAccessService } from '../../services/data-access.service';
import { LoginRegisterSelectors } from '../../store/state/auth/auth.selectors';
import { LoginRegisterActions } from '../../store/state/auth/auth.actions';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  user$ = this._store.select(LoginRegisterSelectors.user);
  loading$ = this._store.select(LoginRegisterSelectors.loading);
  error$ = this._store.select(LoginRegisterSelectors.error);
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  isLoading: boolean = false;
  errorMessage: string = '';
  constructor(
    private _store: Store,
    private authService: DataAccessService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loading$.subscribe((l) => {
      this.isLoading = l;
    });
    this.error$.subscribe((error) => {
      if (error) {
        this.errorMessage = this.authService.getErrorMessage(
          error?.error.error.message
        );
        this.messageService.add({
          key: 'bc',
          severity: 'error',
          summary: 'Error',
          detail: this.errorMessage,
        });
      }
    });
  }

  onLogin() {
    if (this.formLogin.valid) {
      this._store.dispatch(LoginRegisterActions.startLoading());
      this._store.dispatch(
        LoginRegisterActions.postLogin({
          email: this.formLogin.get('email')!.value as string,
          password: this.formLogin.get('password')!.value as string,
        })
      );
    }
  }
}

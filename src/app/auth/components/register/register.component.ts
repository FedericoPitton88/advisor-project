import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { DataAccessService } from '../../services/data-access.service';
import { LoginRegisterActions } from '../../store/state/auth/auth.actions';
import { LoginRegisterSelectors } from '../../store/state/auth/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  error$ = this._store.select(LoginRegisterSelectors.error);
  showError: string | null = null;
  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });

  constructor(private _store: Store, private authService: DataAccessService) { }

  ngOnInit(): void {
    this.error$.subscribe((error) =>{
      if(error !== null)
      this.showError = this.authService.getErrorMessage(error?.error.error.message);
    })
  }

  onSignUp() {
    if (this.formRegister.valid) {
      this._store.dispatch(LoginRegisterActions.startLoading());
      this._store.dispatch(
        LoginRegisterActions.postRegister({
          email: this.formRegister.get('email')!.value as string,
          password: this.formRegister.get('password')!.value as string,
        })
      );
    }
  }

}

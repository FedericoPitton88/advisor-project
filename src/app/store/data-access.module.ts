import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY } from './state/data.state';
import { authReducer } from './state/data.reducer';
import { AuthEffects } from './state/auth/auth.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class DataAccessModule { }

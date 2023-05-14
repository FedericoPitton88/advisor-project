import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY } from './state/data.state';
import { authReducer } from './state/data.reducer';
import { AuthEffects } from './state/auth/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { DataAccessService } from '../services/data-access.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [DataAccessService]
})
export class DataAccessModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PAGES_FEATURE_KEY } from './state/page.state'
import { pagesReducer } from './state/page.reducer'
import { CharacterEffects } from './state/character/marvel.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(PAGES_FEATURE_KEY, pagesReducer),
    EffectsModule.forFeature([CharacterEffects])
  ],
  providers: []
})
export class DataAccessModule { }

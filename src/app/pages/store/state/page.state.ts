import { createFeatureSelector } from '@ngrx/store';
import { ICharacterState } from './marvel/marvel.state'

export const PAGES_FEATURE_KEY = 'character';
export const pagesState = createFeatureSelector<IPagesState>(PAGES_FEATURE_KEY);

export interface IPagesState {
  characterState: ICharacterState;
}

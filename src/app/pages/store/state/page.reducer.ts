import { ActionReducerMap } from '@ngrx/store/src';
import { IPagesState } from './page.state';
import { characterReducer } from './character/character.reducer';

export const pagesReducer: ActionReducerMap<IPagesState> = {
  characterState: characterReducer,
};

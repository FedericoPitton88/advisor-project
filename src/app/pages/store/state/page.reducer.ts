import { ActionReducerMap } from '@ngrx/store/src';
import { IPagesState } from './page.state';
import { characterReducer } from './marvel/marvel.reducer';

export const pagesReducer: ActionReducerMap<IPagesState> = {
  characterState: characterReducer,
};

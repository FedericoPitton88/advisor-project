import { Action, createReducer, on } from '@ngrx/store';
import { ICharacterState } from './marvel.state';
import { CharactersActions } from './marvel.actions';

const initialCharacterState: ICharacterState = {
  characters: null,
  charactersDetail: null,
  comics: null,
  comicsDetail: null,
  loading: true,
};

const reducer = createReducer(
  initialCharacterState,
  on(CharactersActions.getCharactersSuccess, (state, { characters }) => ({
    ...state,
    loading: false,
    characters: characters.data.results,
  })),
  on(CharactersActions.getCharactersDetailsSuccess, (state, { charactersDetail }) => ({
    ...state,
    loading: false,
    charactersDetail: charactersDetail.data.results,
  })),
  on(CharactersActions.eraseCharacterDetail, (state) => ({
    ...state,
    charactersDetail: null
  })),

  on(CharactersActions.getComicsSuccess, (state, { comics }) => ({
    ...state,
    loading: false,
    comics: comics.data.results,
  })),
  on(CharactersActions.getComicsDetailsSuccess, (state, { comicsDetail }) => ({
    ...state,
    loading: false,
    comicsDetail: comicsDetail.data.results,
  })),
);

export function characterReducer(
  state: ICharacterState | undefined,
  action: Action
) {
  return reducer(state, action);
}

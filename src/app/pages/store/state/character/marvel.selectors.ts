import { createSelector } from '@ngrx/store';
import { pagesState } from '../page.state';


const characterState = createSelector(
  pagesState,
  (state) => state.characterState
);

const allCharacters = createSelector(characterState, (state) => state?.characters);
const charactersDetail = createSelector(characterState, (state) => state?.charactersDetail);

const allComics = createSelector(characterState, (state) => state?.comics);
const comicsDetail = createSelector(characterState, (state) => state?.comicsDetail);
const loading = createSelector(characterState, (state) => state?.loading);

export const CharactersSelectors = {
  loading,
  allCharacters,
  charactersDetail,
  allComics,
  comicsDetail
};

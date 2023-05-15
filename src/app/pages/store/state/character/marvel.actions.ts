import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const charactersKey = '[Characters]';

const getCharacters = createAction(`${charactersKey} Get All characters`);
const getCharactersSuccess = createAction(
  `${charactersKey} Get all characters Success`,
  props<{ characters: any | null }>()
);
const getCharactersFailure = createAction(
  `${charactersKey} Get all characters Failure`,
  props<{ error: HttpErrorResponse }>()
);

const getChatactersDetails = createAction(`${charactersKey} Get character Detail`, props<{ id: string}>());
const getCharactersDetailsSuccess = createAction(
  `${charactersKey} Get character details Success`,
  props<{ charactersDetail: any | null }>()
);
const getCharactersDetailFailure = createAction(
  `${charactersKey} Get character detail Failure`,
  props<{ error: HttpErrorResponse }>()
);
const eraseCharacterDetail = createAction(`${charactersKey} Erase character Detail`);

const getComics = createAction(`${charactersKey} Get All comics`);
const getComicsSuccess = createAction(
  `${charactersKey} Get all comics Success`,
  props<{ comics: any | null }>()
);
const getComicsFailure = createAction(
  `${charactersKey} Get all Comics Failure`,
  props<{ error: HttpErrorResponse }>()
);

const getComicsDetails = createAction(`${charactersKey} Get comics Detail`, props<{ id: string}>());
const getComicsDetailsSuccess = createAction(
  `${charactersKey} Get comics details Success`,
  props<{ comicsDetail: any | null }>()
);
const getComicsDetailFailure = createAction(
  `${charactersKey} Get comics detail Failure`,
  props<{ error: HttpErrorResponse }>()
);

export const PublicCharactersActions = {
  getCharacters,
  getChatactersDetails,
  getComics,
  getComicsDetails,
  eraseCharacterDetail
};

export const CharactersActions = {
  ...PublicCharactersActions,
  getCharactersSuccess,
  getCharactersFailure,
  getCharactersDetailsSuccess,
  getCharactersDetailFailure,
  getComicsSuccess,
  getComicsFailure,
  getComicsDetailsSuccess,
  getComicsDetailFailure
};

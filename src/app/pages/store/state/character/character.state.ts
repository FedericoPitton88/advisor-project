import { HttpErrorResponse } from '@angular/common/http';
export interface ICharacterState{
  characters: any[] | null;
  charactersDetail: any | null;
  comics: any[] | null;
  comicsDetail: any | null;
  loading: boolean;
}

import { Character } from 'src/app/interface/character.model';
export interface ICharacterState{
  characters: any[] | null;
  charactersDetail: any | null;
  charactersComics: any | null;
  comics: any[] | null;
  comicsDetail: any | null;
  loading: boolean;
}

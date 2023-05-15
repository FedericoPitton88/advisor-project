import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharactersSelectors } from '../../store/state/marvel/marvel.selectors';
import { CharactersActions } from '../../store/state/marvel/marvel.actions';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.sass']
})
export class CharactersContainerComponent implements OnInit {

  characters$ = this._store.select(CharactersSelectors.allCharacters)
  characterDetail$ = this._store.select(CharactersSelectors.charactersDetail)
  characterComics$ = this._store.select(CharactersSelectors.charactersComics)
  loading$ = this._store.select(CharactersSelectors.loading)

  showModal: boolean = false;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(CharactersActions.getCharacters());
    this.characterDetail$.subscribe((p) => {
      p ? this.showModal = true : this.showModal = false;
    });
    this.characterComics$.subscribe((c) => {
      console.log(c);
    })
  }

  onGetCharacterDetail(event: string){
    this._store.dispatch(CharactersActions.getChatactersDetails({id: event}));
    this._store.dispatch(CharactersActions.getChatactersComics({id: event}));
  }

  onCloseModal(event: boolean){
    this.showModal = event;
  }


}

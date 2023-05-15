import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharactersSelectors } from '../../store/state/character/marvel.selectors';
import { CharactersActions } from '../../store/state/character/marvel.actions';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.sass']
})
export class CharactersContainerComponent implements OnInit {

  characters$ = this._store.select(CharactersSelectors.allCharacters)
  characterDetail$ = this._store.select(CharactersSelectors.charactersDetail)
  loading$ = this._store.select(CharactersSelectors.loading)

  showModal: boolean = false;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(CharactersActions.getCharacters());
    this.characterDetail$.subscribe((p) => {
      console.log(p);
      p ? this.showModal = true : this.showModal = false;
    })
  }

  onGetCharacterDetail(event: string){
    this._store.dispatch(CharactersActions.getChatactersDetails({id: event}));
  }

  onCloseModal(event: boolean){
    this.showModal = event;
  }


}

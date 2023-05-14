import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharactersSelectors } from '../../store/state/character/character.selectors';
import { CharactersActions } from '../../store/state/character/character.actions';

@Component({
  selector: 'app-comics-container',
  templateUrl: './comics-container.component.html',
  styleUrls: ['./comics-container.component.sass']
})
export class ComicsContainerComponent implements OnInit {

  comics$ = this._store.select(CharactersSelectors.allComics)
  comicDetail$ = this._store.select(CharactersSelectors.comicsDetail)
  loading$ = this._store.select(CharactersSelectors.loading)

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(CharactersActions.getComics())
    this.comicDetail$.subscribe((c) => {
      console.log(c)
    })
  }

  public onGetComicsDetail(event: string){
    this._store.dispatch(CharactersActions.getComicsDetails({id: event}));
  }

}

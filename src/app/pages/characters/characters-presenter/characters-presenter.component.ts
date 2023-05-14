import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characters-presenter',
  templateUrl: './characters-presenter.component.html',
  styleUrls: ['./characters-presenter.component.sass']
})
export class CharactersPresenterComponent implements OnInit {

  @Input() characters: any;
  @Input() loading: boolean;

  @Output() onGetCharacterDetail: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getCharacterDetail(id: string){
    this.onGetCharacterDetail.emit(id)
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comics-presenter',
  templateUrl: './comics-presenter.component.html',
  styleUrls: ['./comics-presenter.component.sass']
})
export class ComicsPresenterComponent implements OnInit {

  @Input() comics: any[] | null;
  @Input() loading: boolean | null;

  @Output() onGetComicsDetail: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getComicDetail(id: string){
    this.onGetComicsDetail.emit(id);
  }

}

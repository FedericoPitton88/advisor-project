import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/interface/character.model';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.sass']
})
export class ModalDetailComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() characterDetail: Character[] | null;
  @Input() characterComics: any[];
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal(){
    this.closeModal.emit(false);
  }

}

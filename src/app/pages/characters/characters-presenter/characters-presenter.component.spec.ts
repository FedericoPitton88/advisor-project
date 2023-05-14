import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersPresenterComponent } from './characters-presenter.component';

describe('CharactersPresenterComponent', () => {
  let component: CharactersPresenterComponent;
  let fixture: ComponentFixture<CharactersPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersPresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

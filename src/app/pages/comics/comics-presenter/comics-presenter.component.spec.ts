import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsPresenterComponent } from './comics-presenter.component';

describe('ComicsPresenterComponent', () => {
  let component: ComicsPresenterComponent;
  let fixture: ComponentFixture<ComicsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsPresenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsContainerComponent } from './comics-container.component';

describe('ComicsContainerComponent', () => {
  let component: ComicsContainerComponent;
  let fixture: ComponentFixture<ComicsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

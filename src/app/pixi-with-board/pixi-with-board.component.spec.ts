import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiWithBoardComponent } from './pixi-with-board.component';

describe('PixiWithBoardComponent', () => {
  let component: PixiWithBoardComponent;
  let fixture: ComponentFixture<PixiWithBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixiWithBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixiWithBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

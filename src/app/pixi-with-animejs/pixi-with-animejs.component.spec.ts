import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixiWithAnimejsComponent } from './pixi-with-animejs.component';

describe('PixiWithAnimejsComponent', () => {
  let component: PixiWithAnimejsComponent;
  let fixture: ComponentFixture<PixiWithAnimejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixiWithAnimejsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixiWithAnimejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

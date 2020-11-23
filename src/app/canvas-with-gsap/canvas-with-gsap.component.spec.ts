import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasWithGsapComponent } from './canvas-with-gsap.component';

describe('CanvasWithGsapComponent', () => {
  let component: CanvasWithGsapComponent;
  let fixture: ComponentFixture<CanvasWithGsapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasWithGsapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasWithGsapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

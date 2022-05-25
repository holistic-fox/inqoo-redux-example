import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualizerViewComponent } from './equalizer-view.component';

describe('EqualizerViewComponent', () => {
  let component: EqualizerViewComponent;
  let fixture: ComponentFixture<EqualizerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualizerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualizerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

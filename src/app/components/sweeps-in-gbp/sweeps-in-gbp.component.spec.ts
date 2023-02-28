import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweepsInGBPComponent } from './sweeps-in-gbp.component';

describe('SweepsInGBPComponent', () => {
  let component: SweepsInGBPComponent;
  let fixture: ComponentFixture<SweepsInGBPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweepsInGBPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweepsInGBPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

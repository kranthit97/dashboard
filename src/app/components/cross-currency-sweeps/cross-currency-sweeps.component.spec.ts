import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossCurrencySweepsComponent } from './cross-currency-sweeps.component';

describe('CrossCurrencySweepsComponent', () => {
  let component: CrossCurrencySweepsComponent;
  let fixture: ComponentFixture<CrossCurrencySweepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossCurrencySweepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossCurrencySweepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

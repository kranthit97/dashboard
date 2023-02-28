import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionByCurrencyComponent } from './position-by-currency.component';

describe('PositionByCurrencyComponent', () => {
  let component: PositionByCurrencyComponent;
  let fixture: ComponentFixture<PositionByCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionByCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionByCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

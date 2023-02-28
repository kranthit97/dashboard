import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweepMonitorComponent } from './sweep-monitor.component';

describe('SweepMonitorComponent', () => {
  let component: SweepMonitorComponent;
  let fixture: ComponentFixture<SweepMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweepMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweepMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionByRegionComponent } from './position-by-region.component';

describe('PositionByRegionComponent', () => {
  let component: PositionByRegionComponent;
  let fixture: ComponentFixture<PositionByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionByRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

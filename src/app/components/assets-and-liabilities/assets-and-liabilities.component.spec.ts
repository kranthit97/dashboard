import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsAndLiabilitiesComponent } from './assets-and-liabilities.component';

describe('AssetsAndLiabilitiesComponent', () => {
  let component: AssetsAndLiabilitiesComponent;
  let fixture: ComponentFixture<AssetsAndLiabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsAndLiabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsAndLiabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

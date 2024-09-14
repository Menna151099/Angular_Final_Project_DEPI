import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarttotalComponent } from './carttotal.component';

describe('CarttotalComponent', () => {
  let component: CarttotalComponent;
  let fixture: ComponentFixture<CarttotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarttotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarttotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

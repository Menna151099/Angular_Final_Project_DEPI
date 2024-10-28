import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTotalComponent } from './carttotal.component';

describe('CarttotalComponent', () => {
  let component: CartTotalComponent;
  let fixture: ComponentFixture<CartTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

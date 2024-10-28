import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutFormComponent } from './checkoutform.component';

describe('CheckoutformComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

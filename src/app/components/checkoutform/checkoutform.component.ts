import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutFormComponent {
  checkoutData = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    country: 'united-states',
    address: '',
    town: '',
    zipCode: '',
    phone: '',
    comment: '',
    createAccount: false,
    shipDifferent: false,
    paymentMethod: '',
    cardNumber: ''
  };

  onSubmit() {
    console.log('Form Data:', this.checkoutData);
  }
}

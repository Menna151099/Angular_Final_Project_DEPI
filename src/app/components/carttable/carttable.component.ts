import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-carttable',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './carttable.component.html',
    styleUrl: './carttable.component.css'
  })
export class CarttableComponent {
  cartItems: CartItem[] = [
    { name: 'White Modern Chair', price: 130, quantity: 1, image: 'cart1.jpg' },
    { name: 'Minimal Plant Pot', price: 10, quantity: 1, image: 'cart2.jpg' },
    { name: 'Minimal Plant Pot', price: 10, quantity: 1, image: 'cart3.jpg' }
];

  updateQty(item: CartItem, change: number) {
    const newQty = item.quantity + change;
    if (newQty >= 1) {
      item.quantity = newQty;
    }
  }
}

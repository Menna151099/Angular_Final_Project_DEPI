import { Component } from '@angular/core';
@Component({
  selector: 'app-listitems',
  standalone: true,
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent {
  minPrice: number = 10;
  maxPrice: number = 1000;

  updateMinPrice(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = Math.min(Number(target.value), this.maxPrice);
    this.minPrice = newValue;
    target.value = newValue.toString();
  }

  updateMaxPrice(event: Event) {
    const target = event.target as HTMLInputElement;
    const newValue = Math.max(Number(target.value), this.minPrice);
    this.maxPrice = newValue;
    target.value = newValue.toString(); 
  }
}

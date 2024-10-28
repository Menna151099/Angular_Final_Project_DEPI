import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productsview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productsview.component.html',
  styleUrls: ['./productsview.component.css']
})
export class ProductsviewComponent implements OnInit {
  currentImageIndex: number = 0;
  images: string[] = [
    'assests/imgs/pro-big-1.jpg',
    'assests/imgs/pro-big-2.jpg',
    'assests/imgs/pro-big-3.jpg',
    'assests/imgs/pro-big-4.jpg'
  ];

  ngOnInit() {
  }

  changeImage(index: number) {
    this.currentImageIndex = index;
  }
}

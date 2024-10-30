import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupService } from '../../popup.service';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule]
})
export class SearchComponent implements OnInit {
  isPopupOpen = false;

  constructor(private popupService: PopupService) {}

  ngOnInit() {
    this.popupService.popupState$.subscribe((isOpen) => {
      this.isPopupOpen = isOpen;
    });
  }

  closePopup() {
    this.popupService.closePopup();
  }

  performSearch() {
    console.log('Search initiated');
  }
}

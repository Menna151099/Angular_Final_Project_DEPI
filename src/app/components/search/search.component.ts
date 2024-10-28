import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  isOpen = false;
  searchTerm: string = '';

  @Output() closePopup = new EventEmitter<void>();

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.closePopup.emit();
  }

  search() {
    console.log('search', this.searchTerm);
    this.close();
  }
}

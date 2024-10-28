import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule ,RouterModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Popular' },
  ];

  viewOptions = [12, 24, 48, 96];
  selectedSort = 'date';
  selectedView = 12;

  onSortChange(event: any) {
    this.selectedSort = event.target.value;
  }

  onViewChange(event: any) {
    this.selectedView = event.target.value;
  }
}




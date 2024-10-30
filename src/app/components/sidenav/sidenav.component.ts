import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopupService } from '../../popup.service';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  isSidenavOpen = false;
  isSmallScreen = false;
  constructor(private popupService: PopupService) {}

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
onResize() {
  this.checkScreenSize();
}

private checkScreenSize() {
  this.isSmallScreen = window.innerWidth <= 768;
  if (!this.isSmallScreen) {
    this.isSidenavOpen = false;
  }
}
toggleSidenav() {
  this.isSidenavOpen = !this.isSidenavOpen;
}

showPopup() {
  this.popupService.openPopup(); 
}
}

import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SubscribeComponent } from '../../components/subscribe/subscribe.component';
import { UpbuttonComponent } from '../../components/upbutton/upbutton.component';
import { ItemComponent } from '../../components/item/item.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    FooterComponent,
    SubscribeComponent,
    UpbuttonComponent,
    ItemComponent,
    SidenavComponent
  ],
})
export class HomeComponent {
  title = 'e-commerce';
}






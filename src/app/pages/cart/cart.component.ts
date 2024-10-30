import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SubscribeComponent } from '../../components/subscribe/subscribe.component';
import { UpbuttonComponent } from '../../components/upbutton/upbutton.component';
import { CartTotalComponent } from '../../components/carttotal/carttotal.component';
import { CarttableComponent } from '../../components/carttable/carttable.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [
    FooterComponent,
    SubscribeComponent,
    UpbuttonComponent,
    CartTotalComponent,
    CarttableComponent,
    SidenavComponent,
    SearchComponent
  ]
})
export class CartComponent {

}

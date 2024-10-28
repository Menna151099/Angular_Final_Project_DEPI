import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SubscribeComponent } from '../../components/subscribe/subscribe.component';
import { UpbuttonComponent } from '../../components/upbutton/upbutton.component';
import { CartTotalComponent } from '../../components/carttotal/carttotal.component';
import { CheckoutFormComponent } from '../../components/checkoutform/checkoutform.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [
    FooterComponent,
    SubscribeComponent,
    UpbuttonComponent,
    CartTotalComponent,
    CheckoutFormComponent,
    SidenavComponent
  ]
})
export class CheckoutComponent { }


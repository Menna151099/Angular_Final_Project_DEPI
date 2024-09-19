import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { UpbuttonComponent } from '../app/components/upbutton/upbutton.component';
import { CheckoutFormComponent } from '../app/components/checkoutform/checkoutform.component';

@Component({
  selector: 'app-root',
  template: `<app-checkout-form></app-checkout-form>`,
  standalone: true,
  imports: [RouterOutlet,SubscribeComponent, FooterComponent,UpbuttonComponent,CheckoutFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
}

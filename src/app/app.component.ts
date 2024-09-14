import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from '../app/components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SubscribeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
}



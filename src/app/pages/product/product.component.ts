import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SubscribeComponent } from '../../components/subscribe/subscribe.component';
import { UpbuttonComponent } from '../../components/upbutton/upbutton.component';
import { ProductsviewComponent} from '../../components/productsview/productsview.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [
    FooterComponent,
    SubscribeComponent,
    UpbuttonComponent,
    ProductsviewComponent,
    SidenavComponent
  ]
})
export class ProductComponent {

}

import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SubscribeComponent } from '../../components/subscribe/subscribe.component';
import { UpbuttonComponent } from '../../components/upbutton/upbutton.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { ListitemsComponent} from '../../components/listitems/listitems.component';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  standalone: true,
  imports: [
    FooterComponent,
    SubscribeComponent,
    UpbuttonComponent,
    FiltersComponent,
    ListitemsComponent,
    SidenavComponent
  ]
})
export class ShopComponent{

}

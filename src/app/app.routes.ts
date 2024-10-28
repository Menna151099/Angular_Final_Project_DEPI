import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
// pages
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent} from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
// Component
import { FooterComponent } from './components/footer/footer.component';
import { UpbuttonComponent } from './components/upbutton/upbutton.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProductsviewComponent } from './components/productsview/productsview.component';
import { CheckoutFormComponent } from './components/checkoutform/checkoutform.component';
import { CartTotalComponent } from './components/carttotal/carttotal.component';
import { CarttableComponent} from './components/carttable/carttable.component';
import { ItemComponent} from './components/item/item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ListitemsComponent} from './components/listitems/listitems.component';
import { SearchComponent} from './components/search/search.component';


export const routes: Routes = [
  // pages
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
// Component
  { path: 'footer', component: FooterComponent },
  { path: 'upbutton', component: UpbuttonComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'productsview', component: ProductsviewComponent },
  { path: 'checkoutform', component: CheckoutFormComponent },
  { path: 'cart-total', component: CartTotalComponent },
  { path: 'carttable', component: CarttableComponent },
  { path: 'item', component: ItemComponent },
  { path: 'filters', component: FiltersComponent },
  { path: 'listitems', component: ListitemsComponent },
  { path: 'search', component: SearchComponent },
// **
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

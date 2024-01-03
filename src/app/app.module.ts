import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';

import { SalesComponent } from './Pages/sales/sales.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Pages/footer/footer.component';
import { FurnitureComponent } from './Pages/Product/furniture/furniture.component';
import { DecoritemsComponent } from './Pages/Product/decoritems/decoritems.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CartComponent } from './Pages/cart/cart.component';
import { ShopComponent } from './Pages/Product/shop/shop.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './Pages/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
         HomeComponent,
      
         SalesComponent,
                FooterComponent,
                FurnitureComponent,
                DecoritemsComponent,
                AboutusComponent,
                ContactComponent,
                CartComponent,
                ShopComponent,
                AccountComponent,
                  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

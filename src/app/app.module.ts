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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

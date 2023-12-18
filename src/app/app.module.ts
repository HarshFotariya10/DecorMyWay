import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';

import { SalesComponent } from './Pages/sales/sales.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Pages/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
         HomeComponent,
      
         SalesComponent,
                FooterComponent,
   
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

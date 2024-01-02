import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { ObjectUnsubscribedError } from 'rxjs';
import { NgModule } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showforgotpass=true;
  showloggedin=true;
  showregister=true;
  icon=faUser;
  constructor(){}
  signup(data:Object):void{
    console.warn(data);
  }
  loggedin(){
    this.showloggedin=false
  }
  forgot(){
    this.showforgotpass=false
  }
  signin(){
    this.showregister=false
  }
  
}

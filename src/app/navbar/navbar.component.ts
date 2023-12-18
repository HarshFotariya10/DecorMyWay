import { Component } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  icon=faUser;
}

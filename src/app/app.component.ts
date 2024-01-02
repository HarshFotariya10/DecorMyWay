import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--Header-->
  <navbar></navbar>
  <app-account></app-account>
  
  <router-outlet></router-outlet>
  

  <!--Footor-->
  <app-footer></app-footer>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'DecorMyWay';
}

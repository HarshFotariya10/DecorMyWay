import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--Header-->
  <navbar></navbar>
  
  
  <router-outlet></router-outlet>
  

  <!--Footor-->
  <app-footer></app-footer>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'DecorMyWay';
}

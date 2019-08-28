import { Component } from '@angular/core';


@Component({
  selector: 'app-root', // exposed in selector 
  templateUrl: './app.component.html',  //html 
  styleUrls: ['./app.component.css'] //css 
})

//Root Component
export class AppComponent {
  //ts 

  devName: string = "Arun";
}

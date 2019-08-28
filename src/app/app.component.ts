import { Component } from '@angular/core';


@Component({
  selector: 'app-root', // exposed in selector 
  templateUrl: './app.component.html',  //html 
  styleUrls: ['./app.component.css'] //css 
})

//Root Component
export class AppComponent {
  //ts 

  appName: string = "Phone Book";
  developer: string = "Arun"; //explicit typing 
  isLoggedIn: boolean; 
  exp: number = 10;
  x: undefined; 
  y: null;
  
  skillset: string[] = [
    'html', 'css', 'js'
  ];

  skillset1: Array<string> = [
    "sgdsf", "dfgsdf"
  ];

  myProfile: {} = {
    name: "Arun",
    city: "chn"
  }
}

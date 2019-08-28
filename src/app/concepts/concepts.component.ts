import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  //for string interpolation
  conceptName: string = "String Interpolation";
  exp: number = 10;
  skillsList: string[] = [
    'html', 'css', 'js', 'react', 'node', 'ng'
  ];
  isLoggedIn: boolean = true;

  //for propery binding 
  properyBindingTitle:string = "Property Binding";

  constructor() { }

  ngOnInit() {
  }

}

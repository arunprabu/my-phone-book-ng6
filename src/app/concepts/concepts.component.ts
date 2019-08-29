import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})

export class ConceptsComponent implements OnInit, AfterViewInit {

  //for string interpolation
  conceptName: string = "String Interpolation";
  exp: number = 10;
  skillsList: string[] = [
    'html', 'css', 'js', 'react', 'node', 'ng'
  ];
  isLoggedIn: boolean = false;

  //for propery binding 
  properyBindingTitle:string = "Property Binding";


  //for two way binding
  favCity: string = "Pune";


  //@ViewChild -- to access child 
  @ViewChild(CebComponent) cebData;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.cebData);
  }

  //for event binding
  onBtnClick( evt ){
    console.log(evt);
    alert("test");
    // changing the variable's value 
    this.isLoggedIn = true;
  }


  //step4 for custom properly binding
  //custom prop binding related method
  getMyAge(): number {  //number is the return type
    return 100;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  //Step 1
  //custom prop binding - @Input() makes myAge as properly bindable in <app-cpb>
  @Input() myAge: number = 30;
  
  constructor() { }

  ngOnInit() {
  }

}

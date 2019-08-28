import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <p>
      {{mySkills}}
    </p>
  `,
  styles: []
})
export class CebComponent implements OnInit {


  mySkills: string = "html, css, js, nodejs";
  devName: string = "aRun";

  constructor() { }

  ngOnInit() {
  }

}

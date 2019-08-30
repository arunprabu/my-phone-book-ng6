import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr>
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-nav>
      <p class="redTxt">Copyright 2019</p>
    </footer>
  `,  // template literal -- backtick 
  styles: [
    `
      .redTxt{
        color: red;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

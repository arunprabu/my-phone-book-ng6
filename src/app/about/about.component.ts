import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988
  loremIpsum: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quibusdam architecto, repellat voluptate cum ducimus quod recusandae quis vero unde voluptatem vitae. Placeat voluptatem saepe nisi et, excepturi dicta quidem!";

  constructor() { }

  ngOnInit() {
  }

}

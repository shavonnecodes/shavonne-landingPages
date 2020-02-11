import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blurb-page',
  templateUrl: './blurb-page.component.html',
  styleUrls: ['./blurb-page.component.css']
})
export class BlurbPageComponent implements OnInit {
  blurbs = [
    {"id": 1, "name": "Bloggerina", "videoURL": "https://i.imgur.com/ntiYy6I.mp4", "description": "Java, MySQL, and React", "creationDate": "January 2020"}
  ];

  constructor() { }

  ngOnInit() {
  }

}

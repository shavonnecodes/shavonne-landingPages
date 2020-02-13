import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Joke } from '../models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  jokes;
  title = "hi"


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe((data) => {
      console.log(data);
      this.jokes = [data];
      console.log(this.jokes);
    });
  }
}

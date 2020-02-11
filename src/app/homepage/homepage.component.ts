import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cat } from '../models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cats;
  title = "hi"


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe((data) => {
      console.log(data);
      this.cats = [data];
      console.log(this.cats);
    });
  }
}

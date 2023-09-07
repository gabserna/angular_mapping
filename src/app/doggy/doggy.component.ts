import { Component, OnInit } from '@angular/core';
import { RandomApiService } from '../random-api.service';

@Component({
  selector: 'app-doggy',
  templateUrl: './doggy.component.html',
  styleUrls: ['./doggy.component.css']
})
export class DoggyComponent implements OnInit {
  datos: any;

  constructor(private randomApiService: RandomApiService) { }

  ngOnInit() {
    this.randomApiService.getData().subscribe((data) => {
      this.datos = data;
    });
  }

}

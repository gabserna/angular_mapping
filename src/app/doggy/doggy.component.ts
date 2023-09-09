import { Component, OnInit } from '@angular/core';
import { DoggyService } from '../dog.service';


@Component({
  selector: 'app-doggy',
  templateUrl: './doggy.component.html',
  styleUrls: ['./doggy.component.css']
})
export class DoggyComponent implements OnInit {
  breeds: any[] = [];
  selectedBreed: any;
  facts: any[] = [];
  groups: any[] = [];
  selectedGroup: any;

  constructor(private doggyService: DoggyService) {}

  ngOnInit(): void {
    this.doggyService.getBreeds().subscribe((data: any) => {
      this.breeds = data.data;
    });
  }
}

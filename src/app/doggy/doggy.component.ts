import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-doggy',
  templateUrl: './doggy.component.html',
  styleUrls: ['./doggy.component.css']
})
export class DoggyComponent implements OnInit {
  breeds: any;
  nextPage!: string;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.getBreeds().subscribe((data: any) => {
      this.breeds = data;
      this.nextPage = data.links.next;
    });
  }

  loadNextPage(): void {
    if (this.nextPage) {
      this.dogService.getNextPage(2).subscribe((data: any) => {
        this.breeds = data;
        this.nextPage = data.links.next;
      });
    }
  }
}

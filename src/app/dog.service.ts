import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = 'https://dogapi.dog/api/v2/';

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}breeds`);
  }

  getNextPage(pageNumber: number): Observable<any> {
    return this.http.get(`${this.apiUrl}breeds?page[number]=${pageNumber}`);
  }
}

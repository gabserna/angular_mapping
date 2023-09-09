import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoggyService {
  private apiUrl = 'https://dogapi.dog/api/v2';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds`);
  }

  getBreedById(breedId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/${breedId}`);
  }

  // En doggy.service.ts
  getFacts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/facts`);
  }

  // En doggy.service.ts
  getGroups(): Observable<any> {
    return this.http.get(`${this.apiUrl}/groups`);
  }

  // En doggy.service.ts
  getGroupById(groupId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/groups/${groupId}`);
  }
}

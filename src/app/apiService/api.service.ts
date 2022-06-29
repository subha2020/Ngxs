import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalGet } from '../models/zoo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  configUrl = "https://jsonplaceholder.typicode.com/posts";

getAnimalService() {
  return this.http.get<AnimalGet>(this.configUrl);
}
}

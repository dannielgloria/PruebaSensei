import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor( private http: HttpClient) { }

  getAllLocations():Observable<LocationResponse>{
    return this.http.get<LocationResponse>('https://rickandmortyapi.com/api/location');
  }
}

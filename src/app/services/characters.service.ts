import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor( private http: HttpClient) { }

  getAllCharacters():Observable<CharacterResponse>{
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character');
  }
}

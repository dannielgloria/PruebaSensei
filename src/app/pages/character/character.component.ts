import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public characters: Character[] = []

  constructor( private charactersService: CharactersService){
    this.charactersService.getAllCharacters()
    .subscribe((resp) =>{
      // console.log(resp);
      this.characters = resp.results;
    })
  }

  ngOnInit(): void {
  }

}

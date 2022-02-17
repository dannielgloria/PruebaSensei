import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';


@Component({
  selector: 'app-character-grid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css']
})
export class CharacterGridComponent implements OnInit {
  @Input() characters!: Character[];
  constructor(){}
  ngOnInit(): void {
    console.log(this.characters);
  }

}

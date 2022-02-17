import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/location';

@Component({
  selector: 'app-location-grid',
  templateUrl: './location-grid.component.html',
  styleUrls: ['./location-grid.component.css']
})
export class LocationGridComponent implements OnInit {
  @Input() locations!: Result[];
  constructor() { }

  ngOnInit(): void {
  }

}

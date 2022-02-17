import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services//locations.service';
import { Result } from '../../interfaces/location';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locations: Result[] = []
  
  constructor( private locationsService: LocationsService){
    this.locationsService.getAllLocations()
    .subscribe((resp) =>{
      // console.log(resp);
      this.locations = resp.results;
    })
  }

  ngOnInit(): void {
  }

}

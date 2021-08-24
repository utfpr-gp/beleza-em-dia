import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../models/city';

@Component({
  selector: 'app-selected-city',
  templateUrl: './selected-city.component.html',
  styleUrls: ['./selected-city.component.css']
})
export class SelectedCityComponent implements OnInit {

  cityId = 0;
  city!: City;

  constructor(private cityService: CityService) {}

  @Output() isShowCity = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.getCityByid()
  }

  getCityByid() {
    this.cityId = parseInt(sessionStorage.getItem('cityId')!);
    this.cityService.getCityById(this.cityId).subscribe((city: City) => {
      this.city = city;
    });
  }

  showSelectCity(){
    this.isShowCity.emit(false);
  }

}

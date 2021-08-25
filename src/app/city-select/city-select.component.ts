import { Component, OnInit, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../models/city';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit {
  imageURL: string = 'https://lorempixel.com/600/300/city/';

  cities!: City[];
  cityselect!: City;
  @Output() isShowCity = new EventEmitter<boolean>();

  constructor(private cityService: CityService) {}

  ngOnInit(){
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe((cities: City[]) => {
      this.cities = cities;
      this.cityselect = cities[parseInt(sessionStorage.getItem('cityId')!) - 1];
      sessionStorage.setItem('cityId', this.cityselect.id.toString());
    });
  }

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url('+
        this.imageURL +
        ')',
    };
  }

  onSelectChange(){
    this.imageURL = this.cityselect.image;
    sessionStorage.setItem('cityId', this.cityselect.id.toString());
  }

  hideSelectCity(){
    this.isShowCity.emit(true);
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit, AfterViewInit  {
  imageURL: string = 'https://lorempixel.com/600/300/city/';
  constructor() { }

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url('+
        this.imageURL +
        ')',
    };
  }

  onSelectChange(){
    this.imageURL = 'https://lorempixel.com/600/300/animals/';
  }

  ngAfterViewInit(): void {
      $('select').formSelect();
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('select').formSelect();
    }, 1000);
  }
}

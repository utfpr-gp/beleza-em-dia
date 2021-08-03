import * as M from 'materialize-css';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css']
})
export class FeaturedItemComponent implements OnInit {
  name: string;
  road: string;
  number: string;
  city: string;
  state: string;

  constructor() {
    this.name = "Salão da Rose";
    this.road = "Rua X";
    this.number = "1234";
    this.city = "Guarapuava";
    this.state = "PR";
  }

  displayAddress(){
    let address = this.road + ', ' + this.number + ' - ' + this.city + ' - ' + this.state;
    return address;
  }

  ngOnInit(): void {}
}

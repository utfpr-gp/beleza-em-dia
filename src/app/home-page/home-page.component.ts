import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
declare var $: any;

@Component ({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit{
  constructor() { }

  companies!: Company[];

  ngOnInit() {}

  getCompanies(companies: Company[]){
    this.companies = companies;
  }
}

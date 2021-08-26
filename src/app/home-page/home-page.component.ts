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
  amount!: number;
  isShowService!: boolean;
  isShowCity!: boolean;
  ngOnInit() {}

  getCompanies(companies: Company[]){
    this.amount = companies.length;
    this.companies = companies;
  }

  showSearch(isShowService: boolean){
    this.isShowService = isShowService;
  }

  showCity(isShowCity: boolean){
    this.isShowCity = isShowCity;
  }
}

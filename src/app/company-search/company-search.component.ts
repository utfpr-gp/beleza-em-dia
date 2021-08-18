import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent implements OnInit {

  company = "";
  cityId = 0;
  @Output() companies = new EventEmitter<Company[]>();

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
  }

  getCompany(){
    this.cityId = parseInt(sessionStorage.getItem('cityId')!);
    this.companyService.getCompanyByName(this.company, this.cityId).subscribe((companies: Company[]) => {
      this.companies.emit(companies);
    });
  }
}

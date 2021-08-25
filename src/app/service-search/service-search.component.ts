import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.css']
})
export class ServiceSearchComponent implements OnInit {
  categories!: Category[];
  category!: Category;
  services!: Service[];
  service!: Service;
  cityId = 0;

  @Output() companies = new EventEmitter<Company[]>();
  @Output() isShowService = new EventEmitter<boolean>();

  constructor(private categoryService: CategoryService, private serviceService: ServiceService,private companyService: CompanyService) {}

  getCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  getServices(id: number) {
    this.serviceService.getServiceByCategory(id).subscribe((services: Service[]) => {
      this.services = services;
    });
  }

  getCompany(){
    this.cityId = parseInt(sessionStorage.getItem('cityId')!);
    this.companyService.getCompanyByService(this.cityId, this.service.id).subscribe((companies: Company[]) => {
      this.companies.emit(companies);
    });
  }

  onSelectChange(){
    this.getServices(this.category.id);
  }

  ngOnInit(){
    this.getCategories();
  }

  showCompany(){
    this.isShowService.emit(false);
  }
}

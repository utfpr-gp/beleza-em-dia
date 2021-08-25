import * as M from 'materialize-css';
import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../models/company';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css']
})
export class FeaturedItemComponent implements OnInit {

  constructor(private serviceService: ServiceService) {}

  services: Service[] = [];

  @Input() company!: Company;

  ngOnInit(): void{
    this.company.serviceIds.forEach(element => {
      this.addServiceByid(element);
    });
  }

  addServiceByid(id: number){
    this.serviceService.getServiceById(id).subscribe((service: Service) => {
      this.services.push(service);
    });
  }
}

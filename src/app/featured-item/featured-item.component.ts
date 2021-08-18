import * as M from 'materialize-css';
import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../models/company';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css']
})
export class FeaturedItemComponent implements OnInit {

  @Input() company!: Company;

  ngOnInit(): void {}
}

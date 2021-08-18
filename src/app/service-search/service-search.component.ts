import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.css']
})
export class ServiceSearchComponent implements OnInit {
  @Output() isShowService = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  showCompany(){
    this.isShowService.emit(false);
  }
}

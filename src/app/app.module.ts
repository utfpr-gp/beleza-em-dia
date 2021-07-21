import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CompanySearchComponent } from './company-search/company-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectComponent,
    FooterComponent,
    MenuComponent,
    CompanySearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

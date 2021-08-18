import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CitySelectComponent } from './city-select/city-select.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FeaturedItemComponent } from './featured-item/featured-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceSearchComponent } from './service-search/service-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectComponent,
    FooterComponent,
    MenuComponent,
    CompanySearchComponent,
    FeaturedItemComponent,
    HomePageComponent,
    ServiceSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

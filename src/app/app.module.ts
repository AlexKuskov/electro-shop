import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagesComponent } from './components/header/languages/languages.component';
import { ContentComponent } from './components/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchResultComponent } from './components/content/search-result/search-result.component';
import { MainComponent } from './components/content/main/main.component';
import { HeaderCenterComponent } from './components/header/header-center/header-center.component';
import { CategoryContentComponent } from './components/content/category-content/category-content.component';
import { ProductsGridComponent } from './components/content/products-grid/products-grid.component';
import { ProductItemComponent } from './components/content/product-item/product-item.component';
import { SliderButtonDirective } from './components/content/main/slider-button.directive';
import { FilterSectionComponent } from './components/content/filter-section/filter-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguagesComponent,
    ContentComponent,
    NavigationComponent,
    FooterComponent,
    SearchResultComponent,
    MainComponent,
    HeaderCenterComponent,
    CategoryContentComponent,
    ProductsGridComponent,
    ProductItemComponent,
    SliderButtonDirective,
    FilterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

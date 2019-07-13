import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ModalComponent } from './components/modal/modal.component';
import { PageNotFoundComponent } from './components/content/page-not-found/page-not-found.component';
import { CartComponent } from './components/modal/cart/cart.component';
import { OrderFormComponent } from './components/modal/order-form/order-form.component';

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
    FilterSectionComponent,
    ModalComponent,
    PageNotFoundComponent,
    CartComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

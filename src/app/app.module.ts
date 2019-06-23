import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagesComponent } from './components/header/languages/languages.component';
import { ContentComponent } from './components/content/content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchResultComponent } from './components/content/search-result/search-result.component';
import { FilterComponent } from './components/content/filter/filter.component';
import { MainComponent } from './components/content/main/main.component';
import { NavigationItemContentComponent } from './components/content/navigation-item-content/navigation-item-content.component';
import { HeaderCenterComponent } from './components/header/header-center/header-center.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LanguagesComponent,
    ContentComponent,
    NavigationComponent,
    FooterComponent,
    SearchResultComponent,
    FilterComponent,
    MainComponent,
    NavigationItemContentComponent,
    HeaderCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

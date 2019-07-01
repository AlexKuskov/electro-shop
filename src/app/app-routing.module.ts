import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './components/content/search-result/search-result.component';
import { CategoryContentComponent } from './components/content/category-content/category-content.component';
import { MainComponent } from './components/content/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'category', component: CategoryContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

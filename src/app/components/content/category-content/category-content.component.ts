import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryContentService } from 'src/app/services/category-content.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss']
})
export class CategoryContentComponent implements OnInit {

  activeCategory: Category;

  constructor(private route: ActivatedRoute,
    private categoryContentService: CategoryContentService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.activeCategory = this.categoryContentService.getActiveCategory(params['category-title']);
    });
  }
}

import { TestBed } from '@angular/core/testing';

import { CategoryContentService } from './category-content.service';

describe('CategoryContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryContentService = TestBed.get(CategoryContentService);
    expect(service).toBeTruthy();
  });
});

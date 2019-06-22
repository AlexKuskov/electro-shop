import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationItemContentComponent } from './navigation-item-content.component';

describe('NavigationItemContentComponent', () => {
  let component: NavigationItemContentComponent;
  let fixture: ComponentFixture<NavigationItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

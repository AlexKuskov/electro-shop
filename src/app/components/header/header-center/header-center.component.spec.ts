import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCenterComponent } from './header-center.component';

describe('HeaderCenterComponent', () => {
  let component: HeaderCenterComponent;
  let fixture: ComponentFixture<HeaderCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

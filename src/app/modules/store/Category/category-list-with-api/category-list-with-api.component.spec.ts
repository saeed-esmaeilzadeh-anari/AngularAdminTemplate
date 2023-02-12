import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListWithAPIComponent } from './category-list-with-api.component';

describe('CategoryListWithAPIComponent', () => {
  let component: CategoryListWithAPIComponent;
  let fixture: ComponentFixture<CategoryListWithAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListWithAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListWithAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

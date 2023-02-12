import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInfoWithReactiveFormsComponent } from './category-info-with-reactive-forms.component';

describe('CategoryInfoWithReactiveFormsComponent', () => {
  let component: CategoryInfoWithReactiveFormsComponent;
  let fixture: ComponentFixture<CategoryInfoWithReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInfoWithReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInfoWithReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

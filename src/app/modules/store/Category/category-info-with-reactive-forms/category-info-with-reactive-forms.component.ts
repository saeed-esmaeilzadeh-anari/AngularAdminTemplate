import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, Validators, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { NotificationsService } from "angular2-notifications";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "../../../../services/store/category.service";
import { Category } from "../../../../models/store/Category";
import { CategoryFeature } from "../../../../models/store/CategoryFeature";

//FormGroup:
//تعریف کنترل های مرتبط با یک فرم در کنار یکدیگر

//FormControl:
//تعریف کنترل های یک فرم

//Validators:
//تعریف ولیدیشن  های مربوط به یک فرم کنترل

//FormBuilder
//برای افزودن فرم کنترل به یک فرم گروپ از فرم بیلدر استفاده می کنیم

@Component({
  selector: "app-category-info-with-reactive-forms",
  templateUrl: "./category-info-with-reactive-forms.component.html",
  styleUrls: ["./category-info-with-reactive-forms.component.css"]
})
export class CategoryInfoWithReactiveFormsComponent implements OnInit {
  progress = 0;
  myForm: FormGroup;
  editMode: boolean = false;
  category: Category = new Category();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private ngxLoader: NgxUiLoaderService,
    private notification: NotificationsService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  generateCategoryFeature(feature: CategoryFeature = null): FormGroup {
    return this.formBuilder.group({
      title: [feature.title || ""],
      type: [feature.type || ""],
      sort: [feature.sort || ""]
    });
  }

  ngOnInit(): void {
    //نحوه تعریف یک
    //ReactiveForms
    this.ngxLoader.start();

    setTimeout(() => {
      this.ngxLoader.stop();
    }, 4000);

    if (this.route.snapshot.params.id) {
      this.editMode = true;
      //call get categoryInfo from categoryService
      this.categoryService
        .get(+this.route.snapshot.params.id)
        .subscribe(data => {
          this.category = data;
          let featureArray = [];
          for (let i = 0; i < this.category.features.length; i++) {
            featureArray.push(
              this.generateCategoryFeature(this.category.features[i])
            );
          }

          this.myForm = this.formBuilder.group({
            id: [this.category.id, Validators.required],
            categoryName: [
              this.category.categoryName,
              [Validators.required, Validators.minLength(3)]
            ],
            description: [this.category.description, Validators.maxLength(20)],
            isActive: [this.category.isActive],
            features: this.formBuilder.array(featureArray)
          });
        });
    } else {
      //Insert Mode
      let featureArray = [];
      for (let i = 0; i < 1; i++) {
        featureArray.push(this.generateCategoryFeature());
      }

      this.myForm = this.formBuilder.group({
        id: ["", Validators.required],
        categoryName: ["", [Validators.required, Validators.minLength(3)]],
        description: [null, Validators.maxLength(20)],
        isActive: [true],
        features: this.formBuilder.array(featureArray)
      });
    }

    this.notification.info("تست نمایش پیام");
  }

  //ارائه یک ویژگی داخلی به صورت قابل دسترسی روی
  //html
  //ts
  get features() {
    return this.myForm.get("features") as FormArray;
  }

  addNewFeature() {
    this.features.push(this.generateCategoryFeature());
  }

  removeFeature(i: number) {
    this.features.removeAt(i);
  }

  save() {
    if (this.myForm.valid) {
      if (this.editMode) {
        //update
        this.categoryService.edit(+this.route.snapshot.params.id,this.myForm.value).subscribe(result => {
          this.notification.success("بروزرسانی انجام شد");
        })
      } else {
        //insert
        this.http
          .post(environment.api + "/category", this.myForm.value)
          .subscribe(event => {
            this.notification.success("ذخیره سازی انجام شد");
          });
      }
      // console.log(this.myForm);
      // console.log(this.myForm.value);
      // alert("save succ...");
    }
  }

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-province-info",
  templateUrl: "./province-info.component.html",
  styleUrls: ["./province-info.component.css"]
})
export class ProvinceInfoComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ["", Validators.required],
      telCode: ["", [Validators.required]],
      description: ["", [Validators.minLength(15)]]
    });

    this.myForm.valueChanges.subscribe(x => {
      console.log(x);
    });

    this.myForm.get("email").valueChanges.subscribe(x => {
      console.log(x);
    });
  }

  onSubmit(myForm:FormGroup) {
    console.log("this.myForm.controls.description.errors");
    console.log(this.myForm.controls.description.errors);
    if (this.myForm.valid) {
      alert();
      console.log(this.myForm.value);
    }
  }


}

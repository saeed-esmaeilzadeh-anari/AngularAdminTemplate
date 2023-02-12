import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PersianNumberPipe } from './custom-pipes/persian-number.pipe';
import { NumberToLetterPipe } from './custom-pipes/number-to-letter.pipe';
import { BackgroundColorDirective } from './custom-directives/background-color.directive';
import { RainBowDirective } from './custom-directives/rain-bow.directive';



@NgModule({
  declarations: [FileUploadComponent, PersianNumberPipe, NumberToLetterPipe, BackgroundColorDirective, RainBowDirective],
  imports: [
    CommonModule
  ],
  exports: [PersianNumberPipe,NumberToLetterPipe, BackgroundColorDirective, RainBowDirective]
})
export class SharedModule { }

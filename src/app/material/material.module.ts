import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSliderModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatButtonModule,
    MatSliderModule,
  ],
  exports: [
    MatButtonModule,
    MatSliderModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatButtonModule, MatSliderModule, MatProgressBarModule, 
          MatProgressSpinnerModule, MatToolbarModule, MatMenuModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatSliderModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    FlexLayoutModule,
    
    MatButtonModule,
    MatSliderModule, 
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }

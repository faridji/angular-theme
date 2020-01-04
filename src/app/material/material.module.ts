import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { OverlayModule} from '@angular/cdk/overlay';

import { 
        MatButtonModule, MatSliderModule, MatProgressBarModule, 
        MatProgressSpinnerModule, MatToolbarModule, MatMenuModule,
        MatIconModule, MatSelectModule,MatCardModule
      } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    OverlayModule,

    MatButtonModule,
    MatSliderModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    FlexLayoutModule,
    OverlayModule,
    
    MatButtonModule,
    MatSliderModule, 
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { OverlayModule} from '@angular/cdk/overlay';

import { 
        MatButtonModule, MatSliderModule, MatProgressBarModule, 
        MatProgressSpinnerModule, MatToolbarModule, MatMenuModule,
        MatIconModule, MatSelectModule,MatCardModule, MatTableModule, 
        MatInputModule, MatListModule
      } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    OverlayModule,

    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatListModule
  ],
  exports: [
    FlexLayoutModule,
    OverlayModule,
    
    MatButtonModule,
    MatInputModule,
    MatSliderModule, 
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatListModule
  ]
})
export class MaterialModule { }

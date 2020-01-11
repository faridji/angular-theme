import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GeneralTableComponent } from './components/general-table/general-table.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChangeDetectionStrategyComponent } from './components/change-detection-strategy/component';
import { ChildAppComponent } from './components/change-detection-strategy/child-app/child-app.component';

let routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: GeneralTableComponent},
  { path: 'changeDetectionStrategy', component: ChangeDetectionStrategyComponent},
  { path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    GeneralTableComponent,
    HomeComponent,
    NotFoundComponent,

    ChangeDetectionStrategyComponent,
    ChildAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

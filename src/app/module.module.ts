import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes,{
     
      useHash:true,
      scrollPositionRestoration:'enabled',
    }),
  ],
  exports:[RouterModule]
})
export class ModuleModule { }

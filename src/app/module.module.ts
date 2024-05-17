import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { MyContentTypeInterceptor } from './my-content-type-interceptor.interceptor'; // Importa tu interceptor

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
=======

import { HttpClientModule } from "@angular/common/http";
>>>>>>> 63c742afb1bf43bd307171ada19daf1701cca903
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
<<<<<<< HEAD
  exports:[RouterModule],
  providers: [
    // ... otros proveedores
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyContentTypeInterceptor,
      multi: true
    }
  ],
=======
  exports:[RouterModule]
>>>>>>> 63c742afb1bf43bd307171ada19daf1701cca903
})
export class ModuleModule { }

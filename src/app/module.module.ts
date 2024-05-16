import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyContentTypeInterceptor } from './my-content-type-interceptor.interceptor'; // Importa tu interceptor

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
  exports:[RouterModule],
  providers: [
    // ... otros proveedores
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyContentTypeInterceptor,
      multi: true
    }
  ],
})
export class ModuleModule { }

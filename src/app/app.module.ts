import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, components} from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundedComponent } from './view/page-not-founded/page-not-founded.component';
import { MenuComponent } from './view/menu/menu.component';
import { OurServiceComponent } from './view/declarations/home-page/our-service/our-service.component';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundedComponent,
    MenuComponent,
   components,
   OurServiceComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

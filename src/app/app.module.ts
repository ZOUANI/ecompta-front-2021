import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, components} from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundedComponent } from './view/page-not-founded/page-not-founded.component';
import { MenuComponent } from './view/menu/menu.component';
import { OurServiceComponent } from './view/declarations/home-page/our-service/our-service.component';
import {HttpClientModule} from '@angular/common/http';
import {DeclarationISComponent} from "./view/declaration-is/declaration-is.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {DialogFactureComponent} from "./view/dialog-facture/dialog-facture.component";
import {FormsModule} from "@angular/forms";
import {DeclarationIsCriteriaComponent} from "./view/declaration-is-criteria/declaration-is-criteria.component";




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundedComponent,
    MenuComponent,
   components,
   OurServiceComponent,
    DialogFactureComponent,
    DeclarationISComponent,
    DeclarationIsCriteriaComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

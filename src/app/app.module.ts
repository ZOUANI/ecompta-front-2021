import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, components} from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundedComponent } from './view/page-not-founded/page-not-founded.component';
import { MenuComponent } from './view/menu/menu.component';
import { OurServiceComponent } from './view/declarations/home-page/our-service/our-service.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";
import {DeclarationIsCriteriaComponent} from "./view/declaration-is-criteria/declaration-is-criteria.component";
import {DialogFactureComponent} from "./view/dialog-facture/dialog-facture.component";
import {FormsModule} from "@angular/forms";
import { DeclarationIsSaveComponent } from './view/declaration-is-save/declaration-is-save.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundedComponent,
    MenuComponent,
   components,
   OurServiceComponent,
    DeclarationIsCriteriaComponent,
    DialogFactureComponent,
    DeclarationIsSaveComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

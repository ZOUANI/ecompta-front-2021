import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, components} from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundedComponent } from './view/page-not-founded/page-not-founded.component';
import { MenuComponent } from './view/menu/menu.component';
import { OurServiceComponent } from './view/declarations/home-page/our-service/our-service.component';
import {HttpClientModule} from '@angular/common/http';

import { DeclarationTVAComponent } from './view/LesServices/declaration-tva/declaration-tva.component';
import { DeclarationIRComponent } from './view/LesServices/declaration-ir/declaration-ir.component';
import { DeclarationISComponent } from './view/LesServices/declaration-is/declaration-is.component';
import { FactureComponent } from './view/LesServices/facture/facture.component';
import {CreationComponent} from './view/LesServices/creation/creation.component';
import {LiquidationComponent} from './view/LesServices/liquidation/liquidation.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundedComponent,
    MenuComponent,
   components,
   OurServiceComponent,
   CreationComponent,
   LiquidationComponent,
   DeclarationTVAComponent,
   DeclarationIRComponent,
   DeclarationISComponent,
   FactureComponent,


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

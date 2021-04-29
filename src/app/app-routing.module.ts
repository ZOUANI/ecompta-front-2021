import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './view/declarations/home-page/home-page.component';
import {AboutUsComponent} from './view/declarations/about-us/about-us.component';

import {PageNotFoundedComponent} from './view/page-not-founded/page-not-founded.component';

import {LiquidationComponent} from './view/LesServices/liquidation/liquidation.component';
import {DeclarationTVAComponent} from './view/LesServices/declaration-tva/declaration-tva.component';
import {DeclarationIRComponent} from './view/LesServices/declaration-ir/declaration-ir.component';
import {DeclarationISComponent} from './view/LesServices/declaration-is/declaration-is.component';
import {FactureComponent} from './view/LesServices/facture/facture.component';
import {CreationComponent} from './view/LesServices/creation/creation.component';

export const components =[HomePageComponent, AboutUsComponent, CreationComponent, LiquidationComponent, DeclarationTVAComponent, DeclarationIRComponent, DeclarationISComponent, FactureComponent];

const routes: Routes = [
  {path: '' , component: components[0]},
  {path : 'homePage' , component: components[0]},
  {path : 'about-us' , component: components[1]},
  {path: 'creation' , component: components[2]},
  {path: 'liquidation' , component: components[3]},
  {path: 'declaration-tva' , component: components[4]},
  {path: 'declaration-ir' , component: components[5]},
  {path: 'declaration-is' , component: components[6]},
  {path: 'facture' , component: components[7]},
  //{path: '**' , component: PageNotFoundedComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

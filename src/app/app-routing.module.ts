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
import {ClassComptableComponent} from './view/classeComptable/classComptable.component';
import {DeclarationIsSaveComponent} from "./view/declaration-is-save/declaration-is-save.component";
import {MenuDecISComponent} from "./view/menu-dec-is/menu-dec-is.component";
import {DeclarationIsCriteriaComponent} from "./view/declaration-is-criteria/declaration-is-criteria.component";

export const components =[HomePageComponent, AboutUsComponent, CreationComponent, LiquidationComponent, DeclarationTVAComponent, DeclarationIRComponent, DeclarationISComponent, FactureComponent , ClassComptableComponent];

const routes: Routes = [
  {path: '' , component: components[0]},
  {path : 'homePage' , component: components[0]},
  {path : 'about-us' , component: components[1]},
  {path: 'creation' , component: components[2]},
  {path: 'liquidation' , component: components[3]},
  {path: 'declaration-tva' , component: components[4]},
  {path: 'declaration-ir' , component: components[5]},
  {path: 'declaration-is' , component: components[6], children: [
      {
        path: '',
        component: MenuDecISComponent,
        outlet: 'jas',
      },
      {
        path: 'save',
        component: DeclarationIsSaveComponent,
        outlet: 'jas',
      },
      {
        path: 'criteria',
        component: DeclarationIsCriteriaComponent,
        outlet: 'jas',
      }
    ]},
  {path: 'facture' , component: components[7]},
  {path: 'classe-comptable' , component: components[8]},
  //{path: '**' , component: PageNotFoundedComponent}
  //{path: 'declaration-is/dec-is-save' , component: DeclarationIsSaveComponent, outlet: "jas"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

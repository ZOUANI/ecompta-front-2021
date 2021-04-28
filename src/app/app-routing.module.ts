import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './view/declarations/home-page/home-page.component';
import {AboutUsComponent} from './view/declarations/about-us/about-us.component';

import {PageNotFoundedComponent} from './view/page-not-founded/page-not-founded.component';

export const components =[HomePageComponent, AboutUsComponent];

const routes: Routes = [
  {path: '' , component: components[0]},
  {path : 'homePage' , component: components[0]},
  {path : 'about-us' , component: components[1]},
  {path: '**' , component: PageNotFoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

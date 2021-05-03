import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, components} from './app-routing.module';
import {AppComponent} from './app.component';

import {PageNotFoundedComponent} from './view/page-not-founded/page-not-founded.component';
import {MenuComponent} from './view/menu/menu.component';
import {OurServiceComponent} from './view/declarations/home-page/our-service/our-service.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {DeclarationIsCriteriaComponent} from "./view/declaration-is-criteria/declaration-is-criteria.component";
import {DialogFactureComponent} from "./view/dialog-facture/dialog-facture.component";
import {FormsModule} from "@angular/forms";
import {DeclarationIsSaveComponent} from './view/declaration-is-save/declaration-is-save.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxPaginationModule} from 'ngx-pagination';
import {DeclarationTva} from "./controller/model/declaration-tva.model";
import {DecltvacriteriaComponent} from "./view/decltvacriteria/decltvacriteria.component";
import {PopupFactureComponent} from "./view/popup-facture/popup-facture.component";
import {DeclarationTvasaveComponent} from './view/declaration-tvasave/declaration-tvasave.component';
import {ClassComptableComponent} from "./view/classeComptable/classComptable.component";
import {FactureCreateComponent} from "./view/facture-create/facture-create.component";
import {FactureListComponent} from "./view/facture-list/facture-list.component";
import {FactureJournalComponent} from "./view/facture-journal/facture-journal.component";
import {FactureCriteriaComponent} from "./view/facture-criteria/facture-criteria.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundedComponent,
    MenuComponent,
    components,
    OurServiceComponent,
    DeclarationIsCriteriaComponent,
    DialogFactureComponent,
    DeclarationIsSaveComponent,
    DecltvacriteriaComponent,
    PopupFactureComponent,
    ClassComptableComponent,
    FactureCreateComponent,
    FactureListComponent,
    FactureJournalComponent,
    FactureCriteriaComponent,
    DeclarationTvasaveComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    MatDialogModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupFactureComponent]
})
export class AppModule {
}

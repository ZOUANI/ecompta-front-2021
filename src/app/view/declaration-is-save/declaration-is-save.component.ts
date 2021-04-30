import {Component, OnInit} from '@angular/core';
import {DeclarationISService} from "../../controller/service/declaration-is.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogFactureComponent} from "../dialog-facture/dialog-facture.component";
import {DeclarationIS} from "../../controller/model/declaration-is.model";
import {Facture} from "../../controller/model/facture.model";

@Component({
  selector: 'app-declaration-is-save',
  templateUrl: './declaration-is-save.component.html',
  styleUrls: ['./declaration-is-save.component.css']
})
export class DeclarationIsSaveComponent implements OnInit {

  constructor(private declarationIsService: DeclarationISService, private matDialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogFactureComponent, dialogConfig);
  }

  public findFactBySocSourceAndAnnee(decIS: DeclarationIS){
    return this.declarationIsService.findFactBySocSourceAndAnnee(decIS);
  }
  get declarationIs(): DeclarationIS {
    return this.declarationIsService.declarationIs;
  }
  get factureListDebit(): Array<Facture> {
    return this.declarationIsService.factureListDebit;
  }
  get factureListCredit(): Array<Facture> {
    return this.declarationIsService.factureListCredit;
  }
  get factureList(): Array<Facture> {
    return this.declarationIsService.factureList;
  }

  public save(decIS: DeclarationIS){
    return this.declarationIsService.save(decIS);
  }
  ngOnInit(): void {
    this.declarationIsService.findAllTaux();
  }

}

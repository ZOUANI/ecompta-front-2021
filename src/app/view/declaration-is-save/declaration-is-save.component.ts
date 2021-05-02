import {Component, OnInit} from '@angular/core';
import {DeclarationISService} from "../../controller/service/declaration-is.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogFactureComponent} from "../dialog-facture/dialog-facture.component";
import {DeclarationIS} from "../../controller/model/declaration-is.model";
import {Facture} from "../../controller/model/facture.model";
import {DeclarationIsObject} from "../../controller/model/declaration-is-object.model";

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

  public creerFactCred(){
    this.facture.typeOperation = 'credit';
    this.openDialog();
  }

  public creerFactDeb(){
    this.facture.typeOperation = 'debit';
    this.openDialog();
  }

  public clicUpdateF(index:number, f: Facture){
    this.openDialog();
    return this.declarationIsService.clicUpdateF(index, f);

  }
  public deleteFact(index: number, fact:Facture ){
    return this.declarationIsService.deleteFact(index, fact);
    console.log('data = ');
    this.afficherDecIS();
  }
  public afficherDecIS(){
    return this.declarationIsService.afficherDecIS();
  }
  get declarationIsObject(): DeclarationIsObject {
    return this.declarationIsService.declarationIsObject;
  }
  get declarationIs(): DeclarationIS {
    return this.declarationIsService.declarationIs;
  }
  get facture(): Facture {
    return this.declarationIsService.facture;
  }
  public save(){
    return this.declarationIsService.save();
  }
  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {DeclarationISService} from "../../controller/service/declaration-is.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogFactureComponent} from "../dialog-facture/dialog-facture.component";
import {DeclarationIS} from "../../controller/model/declaration-is.model";
import {Facture} from "../../controller/model/facture.model";
import {DeclarationIsObject} from "../../controller/model/declaration-is-object.model";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-declaration-is-save',
  templateUrl: './declaration-is-save.component.html',
  styleUrls: ['./declaration-is-save.component.css']
})
export class DeclarationIsSaveComponent implements OnInit {

  public page = 1;
  public page2 = 1;
  public pageSize = 2;
  index;
  public fact: Facture;


  constructor(private declarationIsService: DeclarationISService, private matDialog: MatDialog, private modalService: NgbModal,config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  open(content, i: number, f: Facture) {
    this.index = i;
    this.fact = f;
    this.modalService.open(content);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogFactureComponent, dialogConfig);
  }

  public creerFactCred(){
    this.facture.typeOperation = 'credit';
    this.facture.societeSource.ice = this.declarationIsObject.iceSociete;
    this.openDialog();
  }

  public creerFactDeb(){
    this.facture.typeOperation = 'debit';
    this.facture.societeSource.ice = this.declarationIsObject.iceSociete;
    this.openDialog();
  }

  public clicUpdateF(index:number, f: Facture){
    this.openDialog();
    return this.declarationIsService.clicUpdateF(index, f);
  }
  public deleteFact(index: number, fact:Facture ){
    return this.declarationIsService.deleteFact(index, fact);
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
  public saveDeclIS(){
    return this.declarationIsService.saveDeclIS();
  }

  public saveDecISBrouillon(){
    return this.declarationIsService.saveDecISBrouillon();
  }

  public refresh(){
    return this.declarationIsService.afficherDecIS();
  }

  ngOnInit(): void {
  }
}

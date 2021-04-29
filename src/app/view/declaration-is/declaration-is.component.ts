import { Component, OnInit } from '@angular/core';
import {DeclarationISService} from '../../controller/service/declaration-is.service';
import {DeclarationIS} from '../../controller/model/declaration-is.model';
import {Facture} from '../../controller/model/facture.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogFactureComponent} from '../dialog-facture/dialog-facture.component';

@Component({
  selector: 'app-declaration-is',
  templateUrl: './declaration-is.component.html',
  styleUrls: ['./declaration-is.component.css']
})
export class DeclarationISComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';

import {MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {DeclarationIS} from '../../controller/model/declaration-is.model';
import {Facture} from '../../controller/model/facture.model';
import {DeclarationISService} from '../../controller/service/declaration-is.service';


@Component({
  selector: 'app-dialog-facture',
  templateUrl: './dialog-facture.component.html',
  styleUrls: ['./dialog-facture.component.css']
})
export class DialogFactureComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogFactureComponent>, private declarationIsService: DeclarationISService){}

  close() {
    this.dialogRef.close("Thanks for using me!");
  }

  public saveFacture(decIS: DeclarationIS, debit: Array<Facture>, credit: Array<Facture>){
    return this.declarationIsService.saveFacture(decIS, debit, credit);
  }
  get facture(): Facture {
    return this.declarationIsService.facture;
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
  ngOnInit(): void {
  }

}

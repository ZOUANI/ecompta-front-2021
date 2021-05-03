import {Component, OnInit} from '@angular/core';

import {MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {DeclarationIS} from '../../controller/model/declaration-is.model';
import {Facture} from '../../controller/model/facture.model';
import {DeclarationISService} from '../../controller/service/declaration-is.service';
import {DeclarationIsObject} from "../../controller/model/declaration-is-object.model";


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

  public closeAndRefresh(): DeclarationIsObject{
    this.close();
    return this.declarationIsService.afficherDecIS();
  }

  public saveFacture(){
    return this.declarationIsService.saveFacture();
  }


  get facture(): Facture {
    return this.declarationIsService.facture;
  }
  get declarationIs(): DeclarationIS {
    return this.declarationIsService.declarationIs;
  }

  ngOnInit(): void {
  }

}

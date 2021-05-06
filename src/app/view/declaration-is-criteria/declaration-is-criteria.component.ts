import { Component, OnInit } from '@angular/core';
import {DeclarationIsVoService} from '../../controller/service/declaration-is-vo.service';
import {DeclarationIS} from '../../controller/model/declaration-is.model';
import {DeclarationIsVo} from '../../controller/model/declaration-is-vo.model';
import {DeclarationIsObject} from "../../controller/model/declaration-is-object.model";
import {Facture} from "../../controller/model/facture.model";
import {DeclarationISService} from "../../controller/service/declaration-is.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-declaration-is-criteria',
  templateUrl: './declaration-is-criteria.component.html',
  styleUrls: ['./declaration-is-criteria.component.css']
})
export class DeclarationIsCriteriaComponent implements OnInit {

  page = 1;
  page2 = 1;
  page3 = 1;
  itemsPerPageDecIS = 2;
  itemsPerPageFact = 3;
  a = false;

  constructor(private declarationVoService: DeclarationIsVoService, private declarationIsService: DeclarationISService) {}


  get declarationISList(): Array<DeclarationIS> {
    return this.declarationVoService.declarationISList;
  }
  get declarationVo(): DeclarationIsVo {
    return this.declarationVoService.declarationVo;
  }
  public criteriaIS(){
    return this.declarationVoService.criteriaIS();
  }
  public findFactures(decIs: DeclarationIS){
    this.a = true;
    return this.declarationVoService.findFactures(decIs);
  }
  get declarationObject(): DeclarationIsObject {
    return this.declarationVoService.declarationObject;
  }
  public deleteFact(index: number, fact:Facture ){
    return this.declarationIsService.deleteFact(index, fact);
  }

  public clicUpdateF(index:number, f: Facture){
    return this.declarationIsService.clicUpdateF(index, f);
  }
  ngOnInit(): void {
  }

}

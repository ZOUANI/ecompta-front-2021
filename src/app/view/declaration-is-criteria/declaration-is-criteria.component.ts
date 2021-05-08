import { Component, OnInit } from '@angular/core';
import {DeclarationIsVoService} from '../../controller/service/declaration-is-vo.service';
import {DeclarationIS} from '../../controller/model/declaration-is.model';
import {DeclarationIsVo} from '../../controller/model/declaration-is-vo.model';
import {DeclarationIsObject} from "../../controller/model/declaration-is-object.model";
import {Facture} from "../../controller/model/facture.model";
import {DeclarationISService} from "../../controller/service/declaration-is.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


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
  public index: number;
  public decIS: DeclarationIS;

  constructor(private declarationVoService: DeclarationIsVoService, private declarationIsService: DeclarationISService, private modalService: NgbModal) {}

  openForUpdate(content, i: number, dec: DeclarationIS) {
    this.index = i;
    this.decIS = dec;
    this.modalService.open(content);
  }

  openForDelete(content1, i: number, dec: DeclarationIS) {
    this.index = i;
    this.decIS = dec;
    this.modalService.open(content1);
  }

  public validerBrouillon(decIsB: DeclarationIS){
    return this.declarationVoService.validerBrouillon(decIsB);
  }
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

  public decIsToXml(decIs: DeclarationIS){
    return this.declarationVoService.decIsToXml(decIs);
  }
  ngOnInit(): void {
  }

}

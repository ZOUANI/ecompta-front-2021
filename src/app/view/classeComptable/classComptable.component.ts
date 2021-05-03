import { Component, OnInit } from '@angular/core';
import {ClasseComptableService} from '../../controller/service/classeComptable.service';
import {ClasseComptable} from '../../controller/model/classeComptable.model';
import {SousClasseComptable} from '../../controller/model/sousClasseComptable.model';
import {CompteComptable} from '../../controller/model/compteComptable.model';
import {SousClasseComptableService} from '../../controller/service/sousClasseComptable.service';
import {CompteComptableService} from '../../controller/service/compteComptable.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-class-comptable',
  templateUrl: './classComptable.component.html',
  styleUrls: ['./classComptable.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClassComptableComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _classNumero: number;
  // tslint:disable-next-line:variable-name
  private _sousClassNumero: number;
  // tslint:disable-next-line:max-line-length
  constructor(config: NgbModalConfig, private modalService: NgbModal, private classeComptableSevice: ClasseComptableService, private sousClasseComptableService: SousClasseComptableService, private compteComptableService: CompteComptableService) {
  }
  ngOnInit(): void {
    this.classeComptableSevice.getAll();
  }
  open(content) {
    this.modalService.open(content);
    this.classeComptableSevice.classeComptable = null;
  }
  get comptecomptable(): CompteComptable{
    return this.compteComptableService.compteComptable;
  }
  get sousClassNumero(): number {
    return this._sousClassNumero;
  }

  set sousClassNumero(value: number) {
    this._sousClassNumero = value;
  }

  get classeComptable(): ClasseComptable {
    return this.classeComptableSevice.classeComptable;
  }

  get classNumero(): number {
    return this._classNumero;
  }

  set classNumero(value: number) {
    this.sousClassNumero = null;
    this._classNumero = value;
    console.log(this.classNumero);
  }
  get sousClasseComptable(): SousClasseComptable {
    return this.sousClasseComptableService.sousClasseComptable;
  }
  get classeComptables(): Array<ClasseComptable>{
  // tslint:disable-next-line:no-unused-expression
   return this.classeComptableSevice.classComptables;
}
  get compteComptables(): Array<CompteComptable>{
    // tslint:disable-next-line:no-unused-expression
    return this.classeComptableSevice.compteCopmtables;
  }
  // tslint:disable-next-line:typedef
  displaySousClasse(numero: number) {
    this.classeComptableSevice.displaySousClasse(numero);
    this.classeComptableSevice.compteCopmtables = null;
  }
  get sousClasseComptables(): Array<SousClasseComptable>{
    // tslint:disable-next-line:no-unused-expression
   return this.classeComptableSevice.sousClassComptables;
  }

  // tslint:disable-next-line:typedef
  displayCompte(numero: number) {
    this.classeComptableSevice.displayCompte(numero);
  }

  deleteClass(numero: number) {
    this.classeComptableSevice.deleteClass(numero);
  }

  deleteSous(numero: number) {
    this.sousClasseComptableService.deleteSous(numero);
  }

  deleteCompte(code: string) {
    this.compteComptableService.deleteCompte(code);
  }

  saveClass(classeComptable: ClasseComptable) {
    this.classeComptableSevice.save(classeComptable);
    this.classeComptableSevice.classeComptable = null;
  }

  saveSousClass(sousClasseComptable: SousClasseComptable) {
    this.sousClasseComptableService.saveSousClass(this.classNumero, sousClasseComptable);
  }

  saveCompte(comptecomptable: CompteComptable) {
    this.compteComptableService.save(this.sousClassNumero, comptecomptable);
  }
}


import { Component, OnInit } from '@angular/core';
import {DeclarationService} from '../controller/service/declaration.service';
import {Societe} from '../controller/model/societe.model';
import {Employe} from '../controller/model/employe.model';
import {DeclarationIR} from '../controller/model/declaration-ir.model';
import {DeclarationIREmploye} from '../controller/model/declaration-iremploye.model';
import * as $ from "jquery";

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {
  alert:boolean = false;


  constructor(private declarationService: DeclarationService) { }


  public selectDeclarationIREmploye(employe:Employe,i:number){

    return this.declarationService.selectDeclarationIREmploye(employe,i);
  }


  updateMontantEmploye(employe:Employe){
    return this.declarationService.updateMontantEmploye(employe);
  }


  public getEmployeClicked(employe:Employe,i: number){
    return this.declarationService.getEmployeClicked(employe,i);
  }



  public simuler (declarationIR: DeclarationIR){

    this.declarationService.simuler(declarationIR);
  }

  public SaveModidfication(declarationIR:DeclarationIR){
    return this.declarationService.SaveModidfication(declarationIR);
  }


  public saveDeclarationIR (declarationIR: DeclarationIR){

   this.declarationService.saveDeclarationIR(declarationIR);
  }

  /*public deleteDeclarationIREmploye(declarationIREmploye:DeclarationIREmploye,i:number){
    return this.declarationService.deleteDeclarationIREmploye(declarationIREmploye,i);
  }*/

  public deleteDeclarationIREmploye(employe:Employe,i:number){
    return this.declarationService.deleteDeclarationIREmploye(employe,i);
  }

  get declarationIR(): DeclarationIR {

    return this.declarationService.declarationIR;
  }
  get societe(): Societe {
    return this.declarationService.societe;
  }
  get employe(): Employe {
    return this.declarationService.employe;
  }

  get employes(): Array<Employe> {
   return  this.declarationService.employes;
  }
  get iceSociete(): number {
    return this.declarationService.iceSociete;
  }
  get declarationIREmployes(): Array<DeclarationIREmploye> {

    return this.declarationService.declarationIREmployes;
  }


  ngOnInit(): void {
  this.declarationService.findAll();





  }

}

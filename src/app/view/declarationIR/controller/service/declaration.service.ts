import { Injectable } from '@angular/core';
import {Societe} from '../model/societe.model';
import {Employe} from '../model/employe.model';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {DeclarationIR} from '../model/declaration-ir.model';
import {DeclarationIREmploye} from '../model/declaration-iremploye.model';
import {isEmpty} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DeclarationService {


  constructor(private http: HttpClient) { }
  private urlBase = 'http://localhost:8036';
  private url = '/gestion-comptabilite/employe/';
  private urlDecIR='/gestion-comptabilite/declarationIr';
  private urlDecIREmp='/gestion-comptabilite/declarationiremploye';


  private _index : number;
  private _societe:Societe;
  private _employe:Employe;
  private _employes:Array<Employe>;
  private _declarationIR:DeclarationIR;
  private _iceSociete:number=2;
  private _declarationIREmployes:Array<DeclarationIREmploye>;
  private _declarationIREmploye:DeclarationIREmploye;
  private _indexEmploye:number;



  public selectDeclarationIREmploye(employe:Employe,i:number) {
    for (let i = 0; i < this.declarationIREmployes.length; i++) {
      if (this.declarationIREmployes[i].employe.cin == employe.cin) {
        this.declarationIREmploye = this.declarationIREmployes[i];
      }

    }
  }

public getEmployeClicked(employe:Employe,i: number){
  this.employe=this.clone(employe);
  this._indexEmploye=i;
  console.log(this._indexEmploye);

  console.log("daazet");
}

  public updateMontantEmploye(employe:Employe){
  console.log(employe);
    this.http.post<DeclarationIREmploye>(this.urlBase+this.urlDecIREmp+'/updateMontantEmploye',employe).subscribe(
      data=>{
        this.employes[this._indexEmploye]=this.clone(this.employe);
    this.declarationIREmploye=this.cloneDeclarationIREmp(data);

        console.log("hello hello !!!");

        console.log(this.declarationIREmployes.length);

     // this.declarationIREmployes[this._indexEmploye]=this.declarationIREmploye;

      for (let i=0;i<this.declarationIREmployes.length;i++){
        if (this.declarationIREmployes[i].employe.cin == employe.cin){
          this.declarationIREmployes[i]= this.declarationIREmploye;
        }


      }


        console.log(this.declarationIREmploye);


      }, error =>{
        console.log(error);
      }

    );




  }
  private cloneDeclarationIREmp(declarationIREmploye: DeclarationIREmploye){
    let Clone = new DeclarationIREmploye();

    Clone.montantIR = declarationIREmploye.montantIR;
    Clone.salaireBrut = declarationIREmploye.salaireBrut;
    Clone.salaireNet = declarationIREmploye.salaireNet;
    Clone.declarationIR = declarationIREmploye.declarationIR;
    Clone.employe = declarationIREmploye.employe;

    return Clone;
  }



  private clone(employe: Employe){
    let myClone = new Employe();

    myClone.cin = employe.cin;
    myClone.prenom = employe.prenom;
    myClone.nom = employe.nom;
    myClone.salaire = employe.salaire;
    myClone.societeEmp = employe.societeEmp;

    return myClone;
  }

  public SaveModidfication(declarationIR:DeclarationIR){
    this.declarationIR.declarationsIREmployes=this.declarationIREmployes;
    this.http.post<number>(this.urlBase+this.urlDecIR+'/saveModification',declarationIR).subscribe(
      data =>{
        if (data > 0){
          console.log("daazet am3elem");
          this.declarationIREmployes=null;
          this.declarationIR=null;
        }
      },error=>{
        console.log("errrrrreur am3elem");
        console.log(error);
      }



    );


  }

  public deleteDeclarationIREmploye(employe:Employe,i:number){
    this.declarationIR.total-=this.declarationIREmployes[i].montantIR;
    this.declarationIREmployes.splice(i,1);
    this.employes.splice(i,1);

    console.log(this.declarationIREmployes);

  }




/*public deleteDeclarationIREmploye(declarationIREmploye:DeclarationIREmploye,i:number){
  this.http.delete<number>(this.urlBase+this.urlDecIREmp+"/employe/cin/"+declarationIREmploye.employe.cin).subscribe(
    data=>{
      console.log("rah tsuuprimat !!!!");
    },error =>{
      console.log(error);
    }

  )

}*/


  public simuler(declarationIR:DeclarationIR){
    this.declarationIR.declarationsIREmployes=this.declarationIREmployes;
    console.log(this.declarationIR.declarationsIREmployes);
    this.http.post<Array<DeclarationIREmploye>>(this.urlBase+this.urlDecIR+'/createDeclarationIr',declarationIR).subscribe(
      data=>{
        console.log(declarationIR);
        console.log("daazet");
        console.log(data);
        //this.declarationIR=data;
        this.declarationIREmployes=data;
        let total=0;
        for (let i=0;i<this.declarationIREmployes.length;i++){
          total+=this.declarationIREmployes[i].montantIR;
        }
        this.declarationIR.total=total;
      console.log(this.declarationIR.declarationsIREmployes);


      },error =>{
        console.log(declarationIR);
        console.log("erreeeura");
        console.log(error);
      }

    );

  }





  public saveDeclarationIR(declarationIR: DeclarationIR){
    //this.declarationIR.societe.ice = '2';

  this.http.post<number>(this.urlBase+'/gestion-comptabilite/declarationIr/'+'/',this.declarationIR).subscribe(

    data=>{
      if (data > 0){

        console.log("it's okkkk");
        this.declarationIR=null;
      }

    },error =>{
  console.log(this._declarationIR);

      console.log("mablaanch");
      console.log(error);
    }
  );
}




  public findAll(){
  this.http.get<Array<Employe>>(this.urlBase + this.url + 'societe/ice/'+this._iceSociete).subscribe(
    data=>{
      this.employes=data;

    },error => {
      console.log("mablaanch");
      console.log(error);

    }
  )




  }


  get declarationIREmploye(): DeclarationIREmploye {
    if (this._declarationIREmploye==null){
      this._declarationIREmploye=new DeclarationIREmploye();
    }
    return this._declarationIREmploye;
  }

  set declarationIREmploye(value: DeclarationIREmploye) {
    this._declarationIREmploye = value;
  }

  get declarationIREmployes(): Array<DeclarationIREmploye> {
    if (this._declarationIREmployes==null){
      this._declarationIREmployes=new Array<DeclarationIREmploye>();
    }
    return this._declarationIREmployes;
  }

  set declarationIREmployes(value: Array<DeclarationIREmploye>) {
    this._declarationIREmployes = value;
  }

  get iceSociete(): number {
    return this._iceSociete;
  }

  set iceSociete(value: number) {
    this._iceSociete = value;
  }

  get declarationIR(): DeclarationIR {
    if(this._declarationIR==null){
      this._declarationIR=new DeclarationIR();
    }
    return this._declarationIR;
  }

  set declarationIR(value: DeclarationIR) {
    this._declarationIR = value;
  }

  get societe(): Societe {
    if (this._societe==null){
      this._societe= new Societe();
    }
    return this._societe;
  }

  set societe(value: Societe) {
    this._societe = value;
  }

  get employe(): Employe {
    if (this._employe==null){
      this._employe = new Employe();
    }
    return this._employe;
  }

  set employe(value: Employe) {
    this._employe = value;
  }

  get employes(): Array<Employe> {
    if (this._employes == null){
      this._employes = new Array<Employe>();
    }
    return this._employes;
  }

  set employes(value: Array<Employe>) {
    this._employes = value;
  }
}

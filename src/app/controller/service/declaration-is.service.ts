import { Injectable } from '@angular/core';
import {DeclarationIS} from '../model/declaration-is.model';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DeclarationIsObject} from "../model/declaration-is-object.model";


@Injectable({
  providedIn: 'root'
})
export class DeclarationISService {

  private _declarationIs: DeclarationIS;
  private _declarationIsObject: DeclarationIsObject;
  private _facture: Facture;
  public exist: boolean;


  constructor(private http: HttpClient) { }

  public afficherDecIS(): DeclarationIsObject{
    this.http.post<DeclarationIsObject>(environment.baseUrlGestionComptabilite + '/declarationIS/frontEnd/', this.declarationIsObject).subscribe(
      data => {
        console.log('Recherche bien effectué');
        this.declarationIsObject = data;
      }, error => {
        console.log('Recherche NON effectué');
      }
    );
    this.facture = null;
    return this.declarationIsObject;
  }

  public saveDeclIS(): DeclarationIS{
    this.http.post<number>(environment.baseUrlGestionComptabilite + '/declarationIS/', this.declarationIs).subscribe(
      data => {
        console.log(data);
        if (data > 0){
          console.log('DeclarationIS BIEN enregistrée ');
        }
      }, error => {
        console.log('Erreur !!! DeclarationIS NON enregistrée');
      }
    );
    return this.declarationIs;
  }

  public saveFacture(){
    console.log('savF');
    if (this.facture.id == null){
      console.log('Ref null -> save');
      this.http.post<number>(environment.baseUrlGestionComptabilite + '/facture/', this.facture).subscribe(
        data =>{
          console.log('data Save = ' + data);
          if (data == -2 || data == -1){
            alert('Declaration IS déjà enregistrée');
          }
          if (data > 0){
            console.log('facture bien enregistrée');
            this.facture = null;
          }
        }, error => {
          console.log('facture NON enregistrée');
          alert('facture NON enregistrée');
        }
      );
    }
    else {
      console.log('updF');
      this.http.put<number>(environment.baseUrlGestionComptabilite +'/facture/', this.facture).subscribe(
        data => {
          console.log('data Update = '+data);
          if (data > 0){
            console.log('facture BIEN modifiée');
            this.facture = null;
          }
        }, error => {
          console.log('facture NON modifiée');
        }
      );
    }
  }

  public deleteFact(index: number, fact:Facture ){
    this.http.delete(environment.baseUrlGestionComptabilite + '/facture/ref/' + fact.ref).subscribe(
      data => {
        console.log('facture index = '+ index+ ' supprimée');
        if (fact.typeOperation == 'credit'){
          this.declarationIsObject.factureC.splice(index, 1);
        }else {
          this.declarationIsObject.factureD.splice(index, 1);
        }
      }, error => {
        console.log('facture non supprimée');
      }
    );
  }

  public clicUpdateF(index:number, f: Facture){
    this.facture = this.cloneFacture(f);
  }

  public cloneFacture(facture: Facture): Facture{
    let myCloneF = new Facture();
    myCloneF.id = facture.id;
    myCloneF.ref = facture.ref;
    myCloneF.libelle = facture.libelle;
    myCloneF.typeOperation = facture.typeOperation;
    myCloneF.dateOperation = facture.dateOperation;
    myCloneF.montantHorsTaxe = facture.montantHorsTaxe;
    myCloneF.montantTVA = facture.montantTVA;
    myCloneF.montantTTC = facture.montantTTC;
    myCloneF.annee = facture.annee;
    myCloneF.mois = facture.mois;
    myCloneF.trim = facture.trim;
    myCloneF.societeSource = facture.societeSource;
    myCloneF.societeDistination = facture.societeDistination;
    myCloneF.tva = facture.tva;
    myCloneF.classComptable = facture.classComptable;
    myCloneF.declarationIS = facture.declarationIS;
    myCloneF.declarationTva = facture.declarationTva;
    //myCloneF.declarationIR = facture.declarationIR;
    return myCloneF;
  }

  get declarationIs(): DeclarationIS {
    if (this._declarationIs == null){
      this._declarationIs = new DeclarationIS();
    }
    return this._declarationIs;
  }

  set declarationIs(value: DeclarationIS) {
    this._declarationIs = value;
  }

  get facture(): Facture {
    if (this._facture == null){
      this._facture = new Facture();
    }
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }

  get declarationIsObject(): DeclarationIsObject {
    if (this._declarationIsObject == null){
      this._declarationIsObject = new DeclarationIsObject();
    }
    return this._declarationIsObject;
  }

  set declarationIsObject(value: DeclarationIsObject) {
    this._declarationIsObject = value;
  }

}

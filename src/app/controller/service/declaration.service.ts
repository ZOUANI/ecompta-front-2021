import { Injectable } from '@angular/core';
import {CategorieService} from '../model/categorie-service.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {
  private _creation: CategorieService ;
  private _liquidation: CategorieService ;
  private _declarationTVA: CategorieService ;
  private _declarationIR: CategorieService ;
  private _declarationIS: CategorieService ;
  private _facture: CategorieService ;


  private urlBase = 'http://localhost:8036';
  private urlCatServ='/gestion-comptabilite/categorieService';
  constructor(private http:HttpClient) { }


  public findBytitre(){

  this.http.get<CategorieService>(this.urlBase+this.urlCatServ+'/titre/creation').subscribe(
    data=>{
        this.creation=data;

    },error => {
      console.log(error);
    }
  );

    this.http.get<CategorieService>(this.urlBase+this.urlCatServ+'/titre/liquidation').subscribe(
    data=>{
        this.liquidation=data;

    },error => {
      console.log(error);
    }
  );
    this.http.get<CategorieService>(this.urlBase+this.urlCatServ+'/titre/declaration TVA').subscribe(
    data=>{

        this.declarationTVA=data;


    },error => {
      console.log(error);
    }
  );
    this.http.get<CategorieService>(this.urlBase+this.urlCatServ+'/titre/declaration IR').subscribe(
    data=>{
        this.declarationIR=data;

    },error => {
      console.log(error);
    }
  );
    this.http.get<CategorieService>(this.urlBase+this.urlCatServ+'/titre/declaration IS').subscribe(
    data=>{
        this.declarationIS=data;

    },error => {
      console.log(error);
    }
  );
    this.http.get<CategorieService>(this.urlBase+this.urlCatServ+'/titre/facture').subscribe(
    data=>{
        this.facture=data;

    },error => {
      console.log(error);
    }
  );


}




  get creation(): CategorieService {
    if (this._creation==null){
      this._creation=new CategorieService();
    }
    return this._creation;
  }

  set creation(value: CategorieService) {
    this._creation = value;
  }

  get liquidation(): CategorieService {
    if (this._liquidation==null){
      this._liquidation=new CategorieService();
    }
    return this._liquidation;
  }

  set liquidation(value: CategorieService) {
    this._liquidation = value;
  }

  get declarationTVA(): CategorieService {
    if (this._declarationTVA==null){
      this._declarationIR=new CategorieService();
    }
    return this._declarationTVA;
  }

  set declarationTVA(value: CategorieService) {
    this._declarationTVA = value;
  }

  get declarationIR(): CategorieService {
    if (this._declarationIR==null){
      this._declarationIR= new CategorieService();
    }
    return this._declarationIR;
  }

  set declarationIR(value: CategorieService) {
    this._declarationIR = value;
  }

  get declarationIS(): CategorieService {
    if (this._declarationIS == null){
      this.declarationIS = new CategorieService();
    }
    return this._declarationIS;
  }

  set declarationIS(value: CategorieService) {
    this._declarationIS = value;
  }

  get facture(): CategorieService {
    if (this._facture==null){
      this._facture=new CategorieService();
    }
    return this._facture;
  }

  set facture(value: CategorieService) {
    this._facture = value;
  }
}

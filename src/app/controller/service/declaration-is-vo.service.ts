import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DeclarationIsVo} from '../model/declaration-is-vo.model';
import {DeclarationIS} from '../model/declaration-is.model';
import {DeclarationIsObject} from "../model/declaration-is-object.model";
import {dateComparator} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";

@Injectable({
  providedIn: 'root'
})
export class DeclarationIsVoService {

  private _declarationVo: DeclarationIsVo;
  private _declarationIs: DeclarationIS;
  private _declarationObject: DeclarationIsObject;
  private _declarationISList: Array<DeclarationIS>;

  constructor(private http: HttpClient) { }

  public criteriaIS(){
    this.http.post<Array<DeclarationIS>>(environment.baseUrlGestionComptabilite + '/declarationIS/criteria/', this.declarationVo).subscribe(
      data => {
        console.log('yyyy');
        this.declarationISList = data;
      }, error => {
        console.log('Erreur !');
      }
    );
  }

  public findFactures(decIs: DeclarationIS){
    this.declarationObject.iceSociete = decIs.societe.ice;
    this.declarationObject.annee = decIs.annee;
    this.http.post<DeclarationIsObject>(environment.baseUrlGestionComptabilite + '/declarationIS/afficheDecIS/', this.declarationObject).subscribe(
      data =>{
        console.log('BIEN');
        this.declarationObject = data;
      }, error => {
        console.log('NOOO BIEN !!!!');
      }
    );
  }

  get declarationVo(): DeclarationIsVo {
    if(this._declarationVo == null){
      this._declarationVo = new DeclarationIsVo;
    }
    return this._declarationVo;
  }

  set declarationVo(value: DeclarationIsVo) {
    this._declarationVo = value;
  }

  get declarationISList(): Array<DeclarationIS> {
    if(this._declarationISList == null){
      this._declarationISList = new Array<DeclarationIS>();
    }
    return this._declarationISList;
  }

  set declarationISList(value: Array<DeclarationIS>) {
    this._declarationISList = value;
  }

  get declarationObject(): DeclarationIsObject {
    if (this._declarationObject == null){
      this._declarationObject = new DeclarationIsObject();
    }
    return this._declarationObject;
  }

  set declarationObject(value: DeclarationIsObject) {
    this._declarationObject = value;
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
}

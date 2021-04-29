import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {DeclarationIsVo} from '../model/declaration-is-vo.model';
import {DeclarationIS} from '../model/declaration-is.model';
import {newArray} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DeclarationIsVoService {

  private _declarationVo: DeclarationIsVo;
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
}

import { Injectable } from '@angular/core';
import {SousClasseComptable} from '../model/sousClasseComptable.model';
import {HttpClient} from '@angular/common/http';
import {CompteComptable} from '../model/compteComptable.model';
import {ClasseComptableService} from './classeComptable.service';

@Injectable({
  providedIn: 'root'
})
export class SousClasseComptableService {
  // tslint:disable-next-line:variable-name
  private _sousClasseComptable: SousClasseComptable;
  constructor(private http: HttpClient) { }

  get sousClasseComptable(): SousClasseComptable {
    if (this._sousClasseComptable == null){
      this._sousClasseComptable = new SousClasseComptable();
    }
    return this._sousClasseComptable;
  }

  set sousClasseComptable(value: SousClasseComptable) {
    this._sousClasseComptable = value;
  }

  deleteSous(numero: number) {
    this.http.delete('http://localhost:8036/gestion-section/section/numero/' + numero).subscribe(
data => {
  console.log(data);
}
    );
  }

  saveSousClass(classNumero: number, sousClasseComptable: SousClasseComptable) {
    this.http.post('http://localhost:8036/gestion-section/section/class-num/' + classNumero + '/', sousClasseComptable).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}

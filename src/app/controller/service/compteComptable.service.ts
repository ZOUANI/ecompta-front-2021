import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClasseComptableService} from './classeComptable.service';
import {CompteComptable} from '../model/compteComptable.model';

@Injectable({
  providedIn: 'root'
})
export class CompteComptableService {
  // tslint:disable-next-line:variable-name
  private _compteComptable: CompteComptable;
  constructor(private http: HttpClient) { }

  get compteComptable(): CompteComptable {
    if (this._compteComptable == null){
      this._compteComptable = new CompteComptable();
    }
    return this._compteComptable;
  }

  set compteComptable(value: CompteComptable) {
    this._compteComptable = value;
  }

// tslint:disable-next-line:typedef
  deleteCompte(code: string) {
    this.http.delete('http://localhost:8036/gestion-categorie/categorie//code/' + code).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  // tslint:disable-next-line:typedef
  save(sousClassNumero: number, comptecomptable: CompteComptable) {
    this.http.post('http://localhost:8036/gestion-categorie/categorie/sousClass-num/' + sousClassNumero + '/', comptecomptable).subscribe(
      data => {console.log(data);
      });
  }
}

import { Injectable } from '@angular/core';
import {DeclarationTvaCriteria} from "../model/declaration-tva-criteria.model";
import {HttpClient} from "@angular/common/http";
import {DeclarationTva} from "../model/declaration-tva.model";
import {DeclarationTvaVo1} from "../model/declaration-tva-vo1.model";
import {DeclarationTvaVo2} from "../model/declaration-tva-vo2.model";
import {DeclarationtvaService} from "./declarationtva.service";

@Injectable({
  providedIn: 'root'
})
export class DeclatvacriteriaService {
  private _declatvacriteria: DeclarationTvaCriteria;
  private _listdeclarationtva: Array<DeclarationTva>;
  private _declarationtvavo2: DeclarationTvaVo2;
  private _declatvaedit: DeclarationTva;
  private _test = 0;
  private _UrlBaseDeclatva = 'http://localhost:8036/gestion-comptabilite/declarationtva';
  constructor(private http: HttpClient, private declarationtvaservice: DeclarationtvaService) { }

  get test(): number {
    return this._test;
  }

  set test(value: number) {
    this._test = value;
  }

  get UrlBaseDeclatva(): string {
    return this._UrlBaseDeclatva;
  }

  set UrlBaseDeclatva(value: string) {
    this._UrlBaseDeclatva = value;
  }

  get declatvaedit(): DeclarationTva {
    if (this._declatvaedit == null){
      this._declatvaedit = new DeclarationTva();
    }
    return this._declatvaedit;
  }

  set declatvaedit(value: DeclarationTva) {
    this._declatvaedit = value;
  }

  get declarationtvavo2(): DeclarationTvaVo2 {
    if (this._declarationtvavo2 == null){
      this._declarationtvavo2 = new DeclarationTvaVo2();
    }
    return this._declarationtvavo2;
  }

  set declarationtvavo2(value: DeclarationTvaVo2) {
    this._declarationtvavo2 = value;
  }

  get listdeclarationtva(): Array<DeclarationTva> {
    if (this._listdeclarationtva == null){
      this._listdeclarationtva = new Array<DeclarationTva>();
    }
    return this._listdeclarationtva;
  }

  set listdeclarationtva(value: Array<DeclarationTva>) {
    this._listdeclarationtva = value;
  }

  get declatvacriteria(): DeclarationTvaCriteria {
    if (this._declatvacriteria == null){
      this._declatvacriteria = new DeclarationTvaCriteria();
    }
    return this._declatvacriteria;
  }

  set declatvacriteria(value: DeclarationTvaCriteria) {
    this._declatvacriteria = value;
  }
  public trouverdeclarationtva(){
    this.http.post<Array<DeclarationTva>>(this.UrlBaseDeclatva + '/criteria',this.declatvacriteria).subscribe(
      data =>{
           this.listdeclarationtva = data;
           console.log('bravo trouver list declaration tva');
      },error => {
        console.log('erreur trouver list declaration tva');
      }
    );
  }
  public trvdetails(declarationtva: DeclarationTva){
    this.declatvaedit = declarationtva;
    this.test = 1;
    let declarationtvavo1 = new DeclarationTvaVo1();
    declarationtvavo1.societeref = declarationtva.societe.ice;
    declarationtvavo1.typedeclarationtva = declarationtva.typeDeclarationTva.ref;
    declarationtvavo1.trim = declarationtva.trim;
    declarationtvavo1.annee = declarationtva.annee;
    declarationtvavo1.mois = declarationtva.mois;
    this.http.post<DeclarationTvaVo2>(this.UrlBaseDeclatva + '/findfacturesandcalcultva',declarationtvavo1).subscribe(
      data =>{
        this.declarationtvavo2 = data;
        console.log('bravo trouver details declaration tva');
      },error => {
        console.log('erreur trouver details declaration tva');
      }
    );
  }
  public refresh(){
    this.declarationtvaservice.trvfacuresandcalcultva();
    if (this.test == 1){
      this.trvdetails(this.declatvaedit);
    }
  }
}

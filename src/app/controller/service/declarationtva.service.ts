import { Injectable } from '@angular/core';
import {DeclarationTva} from "../model/declaration-tva.model";
import {HttpClient} from "@angular/common/http";
import {TypeDeclarationTva} from "../model/type-declaration-tva.model";
import {Facture} from "../model/facture.model";
import {DeclarationTvaVo1} from "../model/declaration-tva-vo1.model";
import {DeclarationTvaVo2} from "../model/declaration-tva-vo2.model";

@Injectable({
  providedIn: 'root'
})
export class DeclarationtvaService {
  private _decltva: DeclarationTva;
  private _declarationtvavo1: DeclarationTvaVo1;
  private _declarationtvavo2: DeclarationTvaVo2;
  private _a = false;
  private _b = false;
  private _c = false;
  private _UrlBase = 'http://localhost:8036/';
  private _Urldeclatva = 'gestion-comptabilite/declarationtva';
  private _Urlfacture ='gestion-comptabilite/facture';
  constructor(private http: HttpClient) {
  }


  get UrlBase(): string {
    return this._UrlBase;
  }

  set UrlBase(value: string) {
    this._UrlBase = value;
  }

  get Urldeclatva(): string {
    return this._Urldeclatva;
  }

  set Urldeclatva(value: string) {
    this._Urldeclatva = value;
  }

  get Urlfacture(): string {
    return this._Urlfacture;
  }

  set Urlfacture(value: string) {
    this._Urlfacture = value;
  }

  get declarationtvavo1(): DeclarationTvaVo1 {
    if (this._declarationtvavo1 == null){
      this._declarationtvavo1 = new DeclarationTvaVo1();
    }
    return this._declarationtvavo1;
  }

  set declarationtvavo1(value: DeclarationTvaVo1) {
    this._declarationtvavo1 = value;
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
  get a(): boolean {
    return this._a;
  }

  set a(value: boolean) {
    this._a = value;
  }

  get b(): boolean {
    return this._b;
  }

  set b(value: boolean) {
    this._b = value;
  }

  get c(): boolean {
    return this._c;
  }

  set c(value: boolean) {
    this._c = value;
  }

  get decltva(): DeclarationTva {
    if (this._decltva == null) {
      this._decltva = new DeclarationTva();
    }
    return this._decltva;
  }

  set decltva(value: DeclarationTva) {
    this._decltva = value;
  }

  public test() {
    this.a = true;
    if (this.decltva.typeDeclarationTva.ref == 'TDTV1') {
      this.c = false;
      this.b = true;
    } else {
      this.b = false;
      this.c = true;
    }
  }
  public trvfacuresandcalcultva(){
     this.declarationtvavo1.societeref = this.decltva.societe.ice;
     this.declarationtvavo1.typedeclarationtva = this.decltva.typeDeclarationTva.ref;
     this.declarationtvavo1.annee = this.decltva.annee;
     this.declarationtvavo1.mois = this.decltva.mois;
     this.declarationtvavo1.trim = this.decltva.trim;
     this.http.post<DeclarationTvaVo2>(this.UrlBase + this.Urldeclatva + '/findfacturesandcalcultva',this.declarationtvavo1).subscribe(
       data =>{
           this.declarationtvavo2 = data;
           console.log('bravo trvfacuresandcalcultva');
       }, error => {
         console.log('erreur trvfacuresandcalcultva');
       }
     );
  }
  public save() {
    this.http.post<number>(this.UrlBase + this.Urldeclatva + '/', this.decltva).subscribe(
       data => {
         if (data > 0){
           console.log('bravo save declaration tva');
           alert('Declaration tva bien enregistrée');
           this.decltva = null;
           this.declarationtvavo2 = null;
         }
       }, error => {
        console.log('erreur save declaration tva');
      }
    );
  }
  public delete1(index: number,facture: Facture) {
    this.http.delete(this.UrlBase + this.Urlfacture + '/ref/' + facture.ref).subscribe(
      data => {
        if (facture.typeOperation == "type-1"){
          this.declarationtvavo2.listfacturevente.splice(index,1);
          this.declarationtvavo2.tvacollecter = this.declarationtvavo2.tvacollecter - facture.montantTVA;
          alert('vous avez supp ' + data + 'Facture Vente.');
        }
        else {
          this.declarationtvavo2.listfactureachat.splice(index,1);
          this.declarationtvavo2.tvadeductible = this.declarationtvavo2.tvadeductible - facture.montantTVA;
          alert('vous avez supp ' + data + 'Facture Achat.');
        }
          console.log('bravo supp facture');
          alert('vous avez supp ' + data + 'Facture.');
      }, error => {
        console.log('erreur supp facture vente');
      }
    );
  }
}

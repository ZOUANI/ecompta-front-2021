import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facture} from '../model/facture.model';
import {PopupFactureComponent} from '../../view/popup-facture/popup-facture.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private _facture: Facture;
  private _a = false;
  private _b = false;
  private _UrlBaseFacture = 'http://localhost:8036/gestion-comptabilite/facture';
  constructor(private http: HttpClient, public dialog: MatDialog) { }


  get UrlBaseFacture(): string {
    return this._UrlBaseFacture;
  }

  set UrlBaseFacture(value: string) {
    this._UrlBaseFacture = value;
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

  get facture(): Facture {
    if (this._facture == null){
      this._facture = new Facture();
    }
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }
  public save(){
    this.http.post<number>(this.UrlBaseFacture + '/',this.facture).subscribe(
      data =>{
         if (data > 0 ){
           console.log('bravo save facture');
           alert('facture créer avec succées');
           this.facture = null;
         } else {
           console.log('data = ' + data + ' est < 0 vous avez pas respecter un des conditions su save facture revoir le backend');
         }
      }, error => {
        console.log('erreur save facture');
      }
    );
  }
  public popupupdate(facture: Facture){
    this.facture = this.cloneFacture(facture);
    this.dialog.open(PopupFactureComponent);
  }
  public update(){
    this.http.put(this.UrlBaseFacture + '/',this.facture).subscribe(
      data =>{
        console.log('bravo update facture');
        this.facture = null;
        alert('Facture bien modifiée');
        this.facture = null;
      }, error => {
        console.log('erreur update facture');
      }
    );
  }
  public cloneFacture(facture: Facture){
    let Myclonefacture = new Facture();
    Myclonefacture.id = facture.id;
    Myclonefacture.ref = facture.ref;
    Myclonefacture.libelle = facture.libelle;
    Myclonefacture.typeOperation = facture.typeOperation;
    Myclonefacture.montantTVA = facture.montantTVA;
    Myclonefacture.montantTTC = facture.montantTTC;
    Myclonefacture.montantHorsTaxe = facture.montantHorsTaxe;
    Myclonefacture.classComptable = facture.classComptable;
    Myclonefacture.declarationIS = facture.declarationIS;
    Myclonefacture.declarationIR = facture.declarationIR;
    Myclonefacture.declarationTva = facture.declarationTva;
    Myclonefacture.societeDistination = facture.societeDistination;
    Myclonefacture.societeSource = facture.societeSource;
    Myclonefacture.tva = facture.tva;
    Myclonefacture.dateOperation = facture.dateOperation;
    Myclonefacture.annee = facture.annee;
    Myclonefacture.mois = facture.mois;
    Myclonefacture.trim = facture.trim;
    return Myclonefacture;
  }
}

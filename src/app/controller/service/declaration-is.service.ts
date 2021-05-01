import { Injectable } from '@angular/core';
import {DeclarationIS} from '../model/declaration-is.model';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TauxIS} from '../model/taux-is.model';
import {Societe} from '../model/societe.model';
import {createMouseEvent} from "@angular/cdk/testing/testbed/fake-events";

@Injectable({
  providedIn: 'root'
})
export class DeclarationISService {

  private _factureListDebit: Array<Facture>;
  private _factureListCredit: Array<Facture>;
  private _factureList: Array<Facture>;
  private _declarationIs: DeclarationIS;
  private _tauxList: Array<TauxIS>;
  private _societe: Societe;
  private _facture: Facture;


  constructor(private http: HttpClient) { }

  public findFactBySocSourceAndAnnee(decIS: DeclarationIS){
    this.http.get<Array<Facture>>(environment.baseUrlGestionComptabilite + '/facture/societeSource/ice/' + decIS.societe.ice + '/annee/' + decIS.annee).subscribe(
      data => {
        this.factureList = data;
        for (let f of this.factureList) {
          if (f.typeOperation == 'debit'){
            this.factureListDebit.push(f);
          }
          if (f.typeOperation == 'credit'){
            this.factureListCredit.push(f);
          }
        }
        decIS.totalHTGain = this.somMontantHT(this.factureListCredit);
        decIS.totalHTCharge = this.somMontantHT(this.factureListDebit);
        decIS.totalHTDiff = decIS.totalHTGain - decIS.totalHTCharge;
        decIS.montantISCalcule = this.calculMontantIS(decIS);
        this.http.get<Societe>(environment.baseUrlGestionComptabilite + '/societe/ice/' + decIS.societe.ice).subscribe(
          data =>{
            this.societe = data;
            if(this.societe.age > 3){
              if (decIS.montantISCalcule < 3000){
                decIS.montantISPaye = 3000.0;
              }
              else{
                decIS.montantISPaye = decIS.montantISCalcule;
              }
            }
            else{
              decIS.montantISPaye = 0;
            }
          },error => {
            console.log('no no no');
          }
        );
      }, error => {
        console.log('errrrr j');
      }
    );
  }
  public findAllTaux(): Array<TauxIS>{
    console.log('ytyt');
    this.http.get<Array<TauxIS>>(environment.baseUrlGestionComptabilite + '/tauxIS/').subscribe(
      data =>{
        console.log('list t b');
        this.tauxList = data;
      }, error => {
        console.log('err');
      }
    );
    return this.tauxList;
  }

  public calculMontantIS(decIS: DeclarationIS): number{
    let montantC =0.0;
    for (let t of this.tauxList) {
      console.log('lolo');
      if (decIS.totalHTDiff >= t.resultatFiscalMin && decIS.totalHTDiff <= t.resultatFiscalMax){
        if(this.tauxList.indexOf(t) == 0){
          montantC = (decIS.totalHTDiff - t.resultatFiscalMin)* t.pourcentage/100;
        }
        else{
          montantC = (decIS.totalHTDiff - t.resultatFiscalMin)* t.pourcentage/100;
          for (let i = this.tauxList.indexOf(t)-1; i>=0; i--){
             let t = this.tauxList[i];
            montantC += (t.resultatFiscalMax - t.resultatFiscalMin)* t.pourcentage/100;
          }
        }
      }
    }
    return montantC;
  }

  public save(decIS: DeclarationIS){
    this.http.post<number>(environment.baseUrlGestionComptabilite + '/declarationIS/', decIS).subscribe(
      data => {
        if (data > 0){
          console.log('bueno');
        }
      }, error => {
        console.log('erura');
      }
    );
  }
  public affectMontantPaye(decIS: DeclarationIS): number{
    let m = 9;
    this.http.post<number>(environment.baseUrlGestionComptabilite + '/declarationIS/montantISPaye/', decIS).subscribe(
      data =>{
        console.log('pp');
        m = data;
      }, error => {
        console.log('popopo');
      }
    );
    return m;
  }

  public somMontantHT(facList: Array<Facture>): number{
    let som = 0;
    facList.forEach(function(f) {
      som+= f.montantHorsTaxe;
    })
    return som;
  }

  public saveFacture(decIS: DeclarationIS, debit: Array<Facture>, credit: Array<Facture>){

    this.http.post<number>(environment.baseUrlGestionComptabilite + '/facture/', this.facture).subscribe(
      data =>{
        if (data > 0){
          console.log('biieeeen');
          if (this.facture.typeOperation == 'debit'){
            debit.push(this.facture);
            decIS.totalHTCharge += this.facture.montantHorsTaxe;
          }
          else {
            console.log('biieeeen22');
            credit.push(this.facture);
            decIS.totalHTGain += this.facture.montantHorsTaxe;
          }
        }
      }, error => {
        console.log('Errq');
      }
    );
  }
  get factureList(): Array<Facture> {
    if (this._factureList == null){
      this._factureList = new Array<Facture>();
    }
    return this._factureList;
  }

  set factureList(value: Array<Facture>) {
    this._factureList = value;
  }

  get factureListDebit(): Array<Facture> {
    if (this._factureListDebit == null){
      this._factureListDebit = new Array<Facture>();
    }
    return this._factureListDebit;
  }

  set factureListDebit(value: Array<Facture>) {
    this._factureListDebit = value;
  }

  get factureListCredit(): Array<Facture> {
    if (this._factureListCredit == null){
      this._factureListCredit = new Array<Facture>();
    }
    return this._factureListCredit;
  }

  set factureListCredit(value: Array<Facture>) {
    this._factureListCredit = value;
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

  get tauxList(): Array<TauxIS> {
    if (this._tauxList == null){
      this._tauxList = new Array<TauxIS>();
    }
    return this._tauxList;
  }

  set tauxList(value: Array<TauxIS>) {
    this._tauxList = value;
  }

  get societe(): Societe {
    if (this._societe == null){
      this._societe = new Societe();
    }
    return this._societe;
  }

  set societe(value: Societe) {
    this._societe = value;
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
}

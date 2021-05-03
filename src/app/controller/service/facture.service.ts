import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facture} from '../model/facture.model';
import {FactureVo} from '../model/facture-vo.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private _facture: Facture;
  private _factures: Array<Facture>;
  private _facturesJournal: Array<Facture>;
  private _facturescriteria: Array<Facture>;
  private _etat: boolean = false;
  private _facturevo: FactureVo;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/facture';


  constructor(private http: HttpClient) {
  }


  get facture(): Facture {
    if (this._facture == null) {
      this._facture = new Facture();
    }
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }


  get factures(): Array<Facture> {
    if (this._factures == null) {
      this._factures = new Array<Facture>();
    }
    return this._factures;
  }

  set factures(value: Array<Facture>) {
    this._factures = value;
  }

  public save() {

    this.http.post<number>(this.urlBase + '/', this.facture).subscribe(
      data => {
        if (data > 0) {
          this.facture = null;
          console.log('bravo');

        }

      }, error => {
        console.log('erreur');
      }
    );


  }

  public updatBackend() {

    this.http.put(this.urlBase + '/', this.facture).subscribe(
      data => {
        if (data > 0) {

          this.facture = null;
          this._etat = false;
          console.log('bravo');

        }

      }, error => {
        console.log('erreur');
      }
    );


  }

  public findAll() {
    this.http.get<Array<Facture>>(this.urlBase + '/').subscribe(
      data => {
        this._factures = data;

      }, error => {
        console.log('erreur');
      }
    );

  }

  private deletebyrefFromview(facture: Facture) {
    const index = this.factures.findIndex(c => c.ref === facture.ref);
    if (index !== -1) {
      this.factures.splice(index, 1);
    }

  }

  public delete(facture: Facture) {
    this.http.delete<number>(this.urlBase + '/ref/' + facture.ref).subscribe(
      data => {
        console.log(data);
        this.deletebyrefFromview(facture);


      }, error => {
        console.log('erreur');
      }
    );


  }

  public updateFront(index: number, facture: Facture) {
    this.facture = this.cloneCommande(facture);
    this._etat = true;


  }

  private cloneCommande(facture: Facture) {
    const myClone = new Facture();
    myClone.id = facture.id;
    myClone.ref = facture.ref;
    myClone.libelle = facture.libelle;
    myClone.montantHorsTaxe = facture.montantHorsTaxe;
    myClone.dateOperation = facture.dateOperation;
    myClone.montantTTC = facture.montantTTC;
    myClone.typeOperation = facture.typeOperation;
    myClone.tva.ref = facture.tva.ref;
    myClone.societeSource.ice = facture.societeSource.ice;
    myClone.societeDistination.ice = facture.societeDistination.ice;
    myClone.classComptable.numero = facture.classComptable.numero;
    myClone.declarationIR= facture.declarationIR;
    myClone.declarationIS= facture.declarationIS;
    myClone.declarationTva= facture.declarationTva;
    return myClone;
  }


  get facturesJournal(): Array<Facture> {
    if (this._facturesJournal == null) {
      this._facturesJournal = new Array<Facture>();
    }
    return this._facturesJournal;
  }

  set facturesJournal(value: Array<Facture>) {

    this._facturesJournal = value;
  }

  get facturevo(): FactureVo {
    if (this._facturevo == null) {
      this._facturevo = new FactureVo();
    }
    return this._facturevo;
  }

  set facturevo(value: FactureVo) {
    this._facturevo = value;
  }

  public Journal() {

    this.http.post<Array<Facture>>(this.urlBase + '/MultiTache', this.facturevo).subscribe(
      data => {
        if (data) {

          this._facturesJournal = data;


        }


      }, error => {

        console.log('erreur');
      }
    );

  }


  get facturescriteria(): Array<Facture> {
    if (this._facturescriteria == null) {
      this._facturescriteria = new Array<Facture>();
    }
    return this._facturescriteria;
  }

  set facturescriteria(value: Array<Facture>) {
    this._facturescriteria = value;
  }

  public Criteria() {
    this.http.get<Array<Facture>>(this.urlBase + '/societeSource/ice/' + this.facturevo.refSocieteSource + '/typeoperation/' + this.facturevo.typOperation).subscribe(
      data => {
        this._facturescriteria = data;

      }, error => {
        console.log('erreur');
      }
    );

  }


  get etat(): boolean {
    return this._etat;
  }

  set etat(value: boolean) {
    this._etat = value;
  }

  get urlBase(): String {
    return this._urlBase;
  }

  set urlBase(value: String) {
    this._urlBase = value;
  }
}

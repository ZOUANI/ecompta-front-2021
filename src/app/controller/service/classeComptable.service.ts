import { Injectable } from '@angular/core';
import {ClasseComptable} from '../model/classeComptable.model';
import {HttpClient} from '@angular/common/http';
import {SousClasseComptable} from '../model/sousClasseComptable.model';
import {CompteComptable} from '../model/compteComptable.model';

@Injectable({
  providedIn: 'root'
})
export class ClasseComptableService {
  // tslint:disable-next-line:variable-name
  private _classeComptable: ClasseComptable;
  // tslint:disable-next-line:variable-name
  private _classComptables: Array<ClasseComptable>;
  // tslint:disable-next-line:variable-name
  private _sousClassComptables: Array<SousClasseComptable>;
  // tslint:disable-next-line:variable-name
  private _compteCopmtables: Array<CompteComptable>;
  constructor(private http: HttpClient ) { }

  get classeComptable(): ClasseComptable {
    if (this._classeComptable == null){this._classeComptable = new ClasseComptable();
    }
    return this._classeComptable;
  }

  set classeComptable(value: ClasseComptable) {
    this._classeComptable = value;
  }

  get classComptables(): Array<ClasseComptable> {
    if (this._classComptables == null){
      this._classComptables = new Array<ClasseComptable>();
    }
    return this._classComptables;
  }

  set classComptables(value: Array<ClasseComptable>) {
    this._classComptables = value;
  }
  get sousClassComptables(): Array<SousClasseComptable> {
    if (this._sousClassComptables == null){
      this._sousClassComptables = new Array<SousClasseComptable>();
    }
    return this._sousClassComptables;
  }

  set sousClassComptables(value: Array<SousClasseComptable>) {
    this._sousClassComptables = value;
  }


  get compteCopmtables(): Array<CompteComptable> {
    if (this._compteCopmtables == null){
      this._compteCopmtables = new Array<CompteComptable>();
    }
    return this._compteCopmtables;
  }

  set compteCopmtables(value: Array<CompteComptable>) {
    this._compteCopmtables = value;
  }

// tslint:disable-next-line:typedef
  public getAll(){
    this.http.get<Array<ClasseComptable>>('http://localhost:8036/gestion-class/class-comptable/').subscribe(
      data => {console.log(data);
               this.classComptables = data;
      }, error  => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  displaySousClasse(numero: number) {
    this.http.get<Array<SousClasseComptable>>('http://localhost:8036/gestion-section/section/ClasseComptable/numero/' + numero).subscribe(
      data => {
        console.log(data);
        this.sousClassComptables = data;
      }
    );
  }

  displayCompte(numero: number) {
    this.http.get<Array<CompteComptable>>('http://localhost:8036/gestion-categorie/categorie/SousClasseComptable/num/' + numero).subscribe(
      data => {
        console.log(data);
        this.compteCopmtables = data;
      }
    );
  }

  deleteClass(numero: number) {
    this.http.delete('http://localhost:8036/gestion-class/class-comptable/numero/' + numero).subscribe(
      data => {
        console.log(data);
        this.getAll();
      }
    );
  }

  save(classeComptable: ClasseComptable) {
    this.http.post('http://localhost:8036/gestion-class/class-comptable/alone/' , classeComptable).subscribe(
      data => {console.log(data);
               this.getAll();
      }
    );
  }
}

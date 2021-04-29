import { Injectable } from '@angular/core';
import {ClassComptable} from '../model/classComptable.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassComptableService {
  // tslint:disable-next-line:variable-name
  private _classComptables: Array<ClassComptable>;
  constructor(private http: HttpClient ) { }


  get classComptables(): Array<ClassComptable> {
    return this._classComptables;
  }

  set classComptables(value: Array<ClassComptable>) {
    this._classComptables = value;
  }
  // tslint:disable-next-line:typedef
  public getAll(){
    this.http.get<Array<ClassComptable>>('http://localhost:8036/gestion-class/class-comptable/').subscribe(
      data => {console.log(data);
               this.classComptables = data;
      }, error  => {
        console.log(error);
      }
    );
  }
}

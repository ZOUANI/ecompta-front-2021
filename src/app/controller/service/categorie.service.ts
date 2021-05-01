import { Injectable } from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  // tslint:disable-next-line:variable-name
  private _categories: Array<Categorie>;
  constructor(private http: HttpClient) { }


  get categories(): Array<Categorie> {
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }

  // tslint:disable-next-line:typedef
  displayCategorie(ref: string) {
    this.http.get<Array<Categorie>>( 'http://localhost:8036/gestion-categorie/categorie/Section/ref/' + ref).subscribe(
      data => {console.log(data);
               this.categories = data;
      }
    );
  }
}

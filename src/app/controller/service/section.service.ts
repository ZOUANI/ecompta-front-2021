import { Injectable } from '@angular/core';
import {Section} from '../model/section.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  // tslint:disable-next-line:variable-name
   private _sections: Array<Section>;
  constructor(private http: HttpClient) { }


  get sections(): Array<Section> {
    return this._sections;
  }

  set sections(value: Array<Section>) {
    this._sections = value;
  }

  // tslint:disable-next-line:typedef
 public display(ref: string) {
   this.http.get<Array<Section>>('http://localhost:8036/gestion-section/section/ClassComptable/ref/' + ref).subscribe(
     data => {console.log(data);
              this.sections = data;
     }
   );
  }
}

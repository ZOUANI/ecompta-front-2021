import {SousClasseComptable} from './sousClasseComptable.model';

export class ClasseComptable {
  public id: number;
  public ref: string;
  public numero: number;
  public libelle: string;
  public listeSections = new Array<SousClasseComptable>();

}

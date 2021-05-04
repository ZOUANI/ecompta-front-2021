import {Societe} from './societe.model';
import {DeclarationIREmploye} from './declaration-iremploye.model';

export class DeclarationIR {
  public id:number;
  public  ref:string;
  public mois:number;
  public annee:number;
  public total:number;
  public societe: Societe;
  public declarationsIREmployes: Array<DeclarationIREmploye>;


}

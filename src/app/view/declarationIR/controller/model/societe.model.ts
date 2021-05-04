import {DeclarationIR} from './declaration-ir.model';
import {Employe} from './employe.model';

export class Societe {
  public id:number;
  public ice:string;
  public adresse:string;
  public raisonSocial:string;
  public dateDeclaration:Date;
  public nom:string;
  public age:number;
  public DeclarationIRs: Array<DeclarationIR>;
  public  employes: Array<Employe>;

}

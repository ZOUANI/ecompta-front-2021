import {Societe} from './societe.model';
import {Facture} from './facture.model';
import {TauxIS} from './taux-is.model';

export class DeclarationIS {
  public id: number;
  public annee: number;
  public ref: string;
  public totalHTGain: number;
  public totalHTCharge: number;
  public totalHTDiff: number;
  public montantISCalcule: number;
  public montantISPaye: number;
  public societe = new Societe();
  public tauxIS = new TauxIS();
  public facture = new Array<Facture>();
}

import {Facture} from "./facture.model";

export class DeclarationIsObject {
  public annee: number;
  public iceSociete: string;
  public totalHTGain : number
  public totalHTCharge : number;
  public totalHTDiff : number;
  public montantISCalcule : number;
  public montantISPaye : number;
  public factureD  = new Array<Facture>();
  public factureC  = new Array<Facture>();
}

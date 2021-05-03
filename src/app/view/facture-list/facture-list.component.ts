import {Component, OnInit} from '@angular/core';
import {Facture} from '../../controller/model/facture.model';
import {FactureService} from '../../controller/service/facture.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  constructor(private factureService: FactureService) {
  }

  ngOnInit(): void {
    this.factureService.findAll();
  }

  get factures(): Array<Facture> {
    return this.factureService.factures;
  }

  public delete(facture: Facture) {
    this.factureService.delete(facture);
  }

  public updateFront(index: number, facture: Facture) {
    this.factureService.updateFront(index, facture);

  }
  get etat(): boolean {
    return this.factureService.etat;
  }
  get facture(): Facture {
    return this.factureService.facture;
  }

  public updatBackend() {
    this.factureService.updatBackend();
  }


}

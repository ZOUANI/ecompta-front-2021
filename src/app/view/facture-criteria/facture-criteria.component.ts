import { Component, OnInit } from '@angular/core';
import {FactureVo} from '../../controller/model/facture-vo.model';
import {FactureService} from '../../controller/service/facture.service';
import {Facture} from '../../controller/model/facture.model';

@Component({
  selector: 'app-facture-criteria',
  templateUrl: './facture-criteria.component.html',
  styleUrls: ['./facture-criteria.component.css']
})
export class FactureCriteriaComponent implements OnInit {

  constructor(private factureService: FactureService) { }

  ngOnInit(): void {
  }
  get facturevo(): FactureVo {
    return this.factureService.facturevo;
  }
  get facturescriteria(): Array<Facture> {
    return this.factureService.facturescriteria;
  }
  public Criteria() {
    this.factureService.Criteria();
  }


}

import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../controller/service/facture.service';
import {Facture} from '../../controller/model/facture.model';

@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.css']
})
export class FactureCreateComponent implements OnInit {

  constructor(private factureService: FactureService) { }

  ngOnInit(): void {
  }
  get facture(): Facture {
    return this.factureService.facture;
  }
  public save() {
    this.factureService.save();
  }





}

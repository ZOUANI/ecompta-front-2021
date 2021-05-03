import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../controller/service/facture.service';
import {Facture} from '../../controller/model/facture.model';
import {FactureVo} from '../../controller/model/facture-vo.model';

@Component({
  selector: 'app-facture-journal',
  templateUrl: './facture-journal.component.html',
  styleUrls: ['./facture-journal.component.css']
})
export class FactureJournalComponent implements OnInit {

  constructor(private factureService: FactureService) { }

  ngOnInit(): void {
  }
  get facturesJournal(): Array<Facture> {
    return this.factureService.facturesJournal;
  }
  get facturevo(): FactureVo {
    return this.factureService.facturevo;
  }
  public Journal() {
    this.factureService.Journal();
  }

}

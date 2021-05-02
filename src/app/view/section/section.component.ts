import { Component, OnInit } from '@angular/core';
import {SousClasseComptableService} from '../../controller/service/sousClasseComptable.service';
import {SousClasseComptable} from '../../controller/model/sousClasseComptable.model';
import {ClasseComptable} from '../../controller/model/classeComptable.model';
import {ClasseComptableService} from '../../controller/service/classeComptable.service';
import {CompteComptableService} from '../../controller/service/compteComptable.service';
import {CompteComptable} from '../../controller/model/compteComptable.model';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class SectionComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(config: NgbModalConfig, private modalService: NgbModal) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content);
  }
}

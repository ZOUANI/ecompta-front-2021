import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {DeclarationIR} from '../controller/model/declaration-ir.model';
import {DeclarationService} from '../controller/service/declaration.service';
import {Employe} from '../controller/model/employe.model';
import {DeclarationIREmploye} from '../controller/model/declaration-iremploye.model';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './modal-options.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class NgbdModalOptions {
  closeResult: string;

  constructor(private modalService: NgbModal,
              private declarationService: DeclarationService) {}
  get declarationIR(): DeclarationIR {

    return this.declarationService.declarationIR;
  }
  get declarationIREmploye(): DeclarationIREmploye {

    return this.declarationService.declarationIREmploye;
  }
 /* get employe(): Employe {

    return this.declarationService.employe;
  }*/

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}

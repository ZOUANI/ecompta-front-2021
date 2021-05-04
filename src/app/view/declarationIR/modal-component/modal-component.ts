import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Employe} from '../controller/model/employe.model';
import {DeclarationService} from '../controller/service/declaration.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">mise à jour Salaire d'employe</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">



          <div class="form">
            <div class="form-group">
              <label >Le nouveau Salaire :</label>
              <input type="number" class="form-control" [(ngModel)]="employe.salaire">
            </div>


          </div>


    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" (click)="updateMontantEmploye(employe)">Update</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;


  constructor(public activeModal: NgbActiveModal,
              private declarationService: DeclarationService) {}
  public getEmployeClicked(c,i){
    return this.declarationService.getEmployeClicked(c,i);
  }

  public updateMontantEmploye(employe: Employe){
    return this.declarationService.updateMontantEmploye(employe);
  }
  get employe(): Employe {
    return this.declarationService.employe;
  }


}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html',

})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}


  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}

import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../../../controller/model/categorie-service.model';
import {DeclarationService} from '../../../../controller/service/declaration.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {

  constructor(private declarationService: DeclarationService ) { }


  get creation(): CategorieService {

    return this.declarationService.creation;
  }
  get liquidation(): CategorieService {

    return this.declarationService.liquidation;
  }

  get declarationTVA(): CategorieService {

    return this.declarationService.declarationTVA;
  }
  get declarationIR(): CategorieService {

    return this.declarationService.declarationIR;
  }

  get declarationIS(): CategorieService {

    return this.declarationService.declarationIS;
  }


  get facture(): CategorieService {

    return this.declarationService.facture;
  }

  ngOnInit(): void {
    this.declarationService.findBytitre();
  }

}

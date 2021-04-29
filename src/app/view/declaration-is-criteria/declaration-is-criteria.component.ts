import { Component, OnInit } from '@angular/core';
import {DeclarationIsVoService} from '../../controller/service/declaration-is-vo.service';
import {DeclarationIS} from '../../controller/model/declaration-is.model';
import {DeclarationIsVo} from '../../controller/model/declaration-is-vo.model';

@Component({
  selector: 'app-declaration-is-criteria',
  templateUrl: './declaration-is-criteria.component.html',
  styleUrls: ['./declaration-is-criteria.component.css']
})
export class DeclarationIsCriteriaComponent implements OnInit {

  constructor(private declarationVoService: DeclarationIsVoService) { }

  get declarationISList(): Array<DeclarationIS> {
    return this.declarationVoService.declarationISList;
  }
  get declarationVo(): DeclarationIsVo {
    return this.declarationVoService.declarationVo;
  }
  public criteriaIS(){
    return this.declarationVoService.criteriaIS();
  }
  ngOnInit(): void {
  }

}

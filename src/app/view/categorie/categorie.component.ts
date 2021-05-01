import { Component, OnInit } from '@angular/core';
import {CompteComptableService} from '../../controller/service/compteComptable.service';
import {CompteComptable} from '../../controller/model/compteComptable.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}

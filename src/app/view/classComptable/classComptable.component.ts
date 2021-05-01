import { Component, OnInit } from '@angular/core';
import {ClassComptable} from '../../controller/model/classComptable.model';
import {ClassComptableService} from '../../controller/service/classComptable.service';
import {SectionService} from '../../controller/service/section.service';
import {CategorieService} from '../../controller/service/categorie.service';
import {Categorie} from '../../controller/model/categorie.model';
import {Section} from '../../controller/model/section.model';

@Component({
  selector: 'app-class-comptable',
  templateUrl: './classComptable.component.html',
  styleUrls: ['./classComptable.component.css']
})
export class ClassComptableComponent implements OnInit {
  get classComptables(): Array<ClassComptable> {
    return this.classComptableService.classComptables;
  }
  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }
  get sections(): Array<Section> {
    return this.sectionService.sections;
  }
  // tslint:disable-next-line:max-line-length
  constructor(private classComptableService: ClassComptableService , private sectionService: SectionService, private categorieService: CategorieService) { }
  ngOnInit(): void {
    this.classComptableService.getAll();
  }

  // tslint:disable-next-line:typedef
  displaySection(ref: string) {
   this.categorieService.categories = null;
    this.sectionService.display(ref);
  }


  // tslint:disable-next-line:typedef
  displayCategorie(ref: string) {
    this.categorieService.displayCategorie(ref);
  }
}

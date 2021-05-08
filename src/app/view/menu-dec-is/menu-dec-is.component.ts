import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-dec-is',
  templateUrl: './menu-dec-is.component.html',
  styleUrls: ['./menu-dec-is.component.css']
})
export class MenuDecISComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo() {
    this.router.navigate([{outlets: {'jas': ['save']}}]);
  }
}

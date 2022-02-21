import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu : String[] = [];
  constructor() { }
  profil = "salarie";

  ngOnInit(): void {
  }
}

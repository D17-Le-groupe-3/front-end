import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Role} from "../../models";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  role: Role | null = null;

  constructor(private userService: UserService) {
    this.role = this.userService.user!.role;
  }

  ngOnInit(): void {
  }
}

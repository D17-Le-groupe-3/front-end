import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userFirstName: string = '';

  constructor(private userService: UserService, private router: Router) {
    if (userService.user)
      this.userFirstName = userService.user.firstName;
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout(() => {
      this.userService.emitChange("logout done !");
      this.router.navigateByUrl('login');
    });
  }
}

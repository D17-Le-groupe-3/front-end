import {Component, OnInit} from '@angular/core';
import {Credentials} from "../../models";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = { email: '', password: '' };
  hasError = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.authenticate(this.credentials, (success) => {
      if (success) {
        this.userService.emitChange("auth done !");
        this.router.navigateByUrl('/');
      }
      else
        this.hasError = true;
    })
    return false;
  }
}

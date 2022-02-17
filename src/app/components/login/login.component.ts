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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    })
    return false;
  }
}

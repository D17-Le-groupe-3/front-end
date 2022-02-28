import {Component} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private userService: UserService) {
    userService.changeEmitted.subscribe(() => {
      this.isLoggedIn = userService.authenticated;
    })
  }
}

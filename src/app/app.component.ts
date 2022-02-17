import {Component} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'digiday';

  constructor(private userService: UserService) {
    this.userService.authenticate(undefined, undefined);
  }


}

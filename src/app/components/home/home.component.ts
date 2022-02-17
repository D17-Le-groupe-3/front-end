import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  greeting: Greeting = {
    id: "",
    content: ""
  };

  constructor(private userService: UserService, private http: HttpClient) {
    http.get<Greeting>(environment.backendUrl + '/test').subscribe(data => {
      if (data)
        this.greeting = data
    });
  }

  ngOnInit(): void {
  }

  authenticated() {
    return this.userService.authenticated;
  }
}

interface Greeting {
  id: string;
  content: string;
}

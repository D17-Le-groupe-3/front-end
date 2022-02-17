import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Credentials} from "../models";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(credentials: Credentials | undefined, callback: (() => any) | undefined) {
    this.http.get<any>(environment.backendUrl + '/user', {
      headers: new HttpHeaders(credentials ? {
        authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
      } : {})
    }).subscribe(response => {
      this.authenticated = !!response['name'];
      return callback && callback();
    })
  }

  logout() {
    this.http.post(environment.backendUrl + '/logout', {}).subscribe({
      next: () => {},
      complete: () => {
        this.authenticated = false;
        this.router.navigateByUrl('login');
      }
    })
  }
}

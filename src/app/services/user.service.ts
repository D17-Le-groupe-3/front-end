import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credentials, User} from "../models";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticated = false;
  user: User | null = null;

  private emitChangeSource = new Subject();
  changeEmitted = this.emitChangeSource.asObservable();

  constructor(private http: HttpClient) { }

  authenticate(credentials: Credentials, callback: ((err: boolean) => any)) {
    this.http.post<User>(environment.backendUrl + '/user', {
      email: credentials.email,
      password: credentials.password
    }).subscribe({
      next: user => {
        this.authenticated = true;
        this.user = user;
        return callback(true);
      },
      error: () => callback(false)
    })
  }

  logout(callback: (() => any)) {
    this.authenticated = false;
    this.user = null;
    return callback();
  }

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}

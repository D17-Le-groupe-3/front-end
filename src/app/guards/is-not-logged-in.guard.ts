import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedInGuard implements CanActivate {

  constructor(private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !this.userService.authenticated;
  }

}

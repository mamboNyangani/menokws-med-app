import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { AuthService } from "./auth-service";


@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate {
	constructor(
        private authService : AuthService,
		private router: Router) { }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
		var isAuthenticated = this.authService.checkToken();
		if (!isAuthenticated) {
			this.router.navigate(['/auth/login']);
		}
		return isAuthenticated;
	}
}

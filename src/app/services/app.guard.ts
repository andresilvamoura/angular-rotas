import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    // simulando uma permissão para o canLoad.
    user = { admin: false, logged: false }

    canActivate(): boolean {
        return this.user.logged; 
    }

    canLoad():  boolean {
        return this.user.admin;
    }


}
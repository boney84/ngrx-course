import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { IsLoggedIn } from "./auth.selectors";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard  {
    constructor(private store: Store, private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // Implement your guard logic here
        return this.store.select(IsLoggedIn).pipe(
            tap(isLoggedIn => {
                if (!isLoggedIn) {
                   this.router.navigateByUrl('/login');
                }
            })
        )
    }

}
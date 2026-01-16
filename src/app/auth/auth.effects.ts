import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authActions } from "./action-types";
import { tap } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects{
    login$= createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.login),
            tap(action => {
                localStorage.setItem('user', JSON.stringify(action.user));
                console.log('Login action dispatched with payload:', action);
            })
        )
    ,{dispatch:false});

    logout$= createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.logout),
            tap(() => {
                localStorage.removeItem('user');
                console.log('Logout action dispatched');
                this.router.navigateByUrl('/login');
            })
        )
    ,{dispatch:false});

    constructor(private actions$:Actions, private router:Router){
    }
}
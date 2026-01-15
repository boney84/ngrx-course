import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { IsLoggedIn, IsLoggedOut } from './auth/auth.selectors';
import { authActions } from './auth/action-types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {

    loading = true;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    constructor(private router: Router, private store: Store) {

    }

    ngOnInit() {
     // this.store.subscribe(state=>console.log('App State', state));
     // this.isLoggedIn$= this.store.pipe(map((state:any) => !!state.auth.user));
     this.isLoggedIn$= this.store.pipe(select(IsLoggedIn));
     this.isLoggedOut$= this.store.pipe(select(IsLoggedOut));
      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

    }

    logout() {
      this.store.dispatch(authActions.logout());
    }

}

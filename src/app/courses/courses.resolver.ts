import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { finalize, first, Observable, tap } from "rxjs";
import { loadAllCourses } from "./courses.actions";
import { Injectable } from "@angular/core";

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   return this.store.pipe(tap(() => {
    if(!this.loading){
        this.loading = true;
        this.store.dispatch(loadAllCourses());
    }
    
   }
   ), 
   first(),
finalize(()=> this.loading = false));
   
  }

}
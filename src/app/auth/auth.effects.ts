import { Inject, Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

@Injectable()
export class AuthEffects{
    constructor(private actions$:Action) {}
}
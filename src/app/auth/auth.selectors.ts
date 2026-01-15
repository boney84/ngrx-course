import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState= createFeatureSelector<AuthState>('auth');
export const IsLoggedIn= createSelector(
    selectAuthState,
    (auth) => !!auth.user
);

export const IsLoggedOut= createSelector(
   IsLoggedIn,
   (isLoggedIn) => !isLoggedIn
);
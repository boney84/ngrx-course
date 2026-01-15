import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { authActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user:User;
}

export const initialAuthState: AuthState = {
  user: undefined
  };

export const authReducers= createReducer(
  initialAuthState,
  on(authActions.login, (state, action) => { 
    console.log('Login Action in Reducer', action);
    return {
    user: action.user
    }
  }),
  on(authActions.logout, (state) => ({ 
    user: undefined
  })),
);


  // export const authReducers= createReducer(
  // initialAuthState,
  // on(authActions.login, (state, action) => ( 
    
  //   {
  //   user: action.user}
  // )),



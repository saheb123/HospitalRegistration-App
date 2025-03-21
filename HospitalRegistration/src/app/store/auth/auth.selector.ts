import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";


export const selectorAuth=createFeatureSelector<AuthState>('login');
export const selectedAuth=createSelector(selectorAuth,(state)=>state.username);
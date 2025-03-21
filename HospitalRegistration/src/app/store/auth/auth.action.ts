import { createAction, props } from "@ngrx/store";

export const setUserName=createAction('[login component] setUserName',props<{username:string}>());
export const clearUserName=createAction('[login component] clearUserName');

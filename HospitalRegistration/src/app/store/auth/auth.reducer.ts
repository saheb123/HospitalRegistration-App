import { createReducer, on, State } from "@ngrx/store";
import { clearUserName, setUserName } from "./auth.action";

export interface AuthState{
    username:string;
}
export const initialState:AuthState={
    username :"dee"
};

export const counterReducer=createReducer(initialState,
    on(setUserName,(state,{username})=>({...state,username:username})),
    on(clearUserName,(state)=>({...state,username:""}))
);


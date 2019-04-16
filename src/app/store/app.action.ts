import { Action } from '@ngrx/store';
import { ISystem } from 'src/models/system.model';

export const Show_ALL_System = 'ShowAllSystem';
export const Show_ALL_System_Sucess = 'ShowAllSystemSuccess';

export class ShowAllSystem implements Action {
   readonly type = Show_ALL_System;
}

export class ShowAllSystemSuccess implements Action {
    readonly type = Show_ALL_System_Sucess;
    constructor(public payload: ISystem[]) {}
}

export type All_Reducer_Actions = ShowAllSystem | ShowAllSystemSuccess;

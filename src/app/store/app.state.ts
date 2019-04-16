import { RouterState } from '@angular/router';
import { ISystem } from 'src/models/system.model';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
    systemState: ISystemState;
}

export interface ISystemState {
    systems: ISystem[];
}
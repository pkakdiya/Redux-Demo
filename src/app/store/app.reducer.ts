import { ISystemState, IAppState } from './app.state';
import { All_Reducer_Actions, Show_ALL_System_Sucess } from './app.action';
import { createFeatureSelector, createSelector, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';

export const initialState: ISystemState = {systems: []};

export function reducer(state = initialState, action: All_Reducer_Actions): ISystemState {
    switch (action.type) {
        case Show_ALL_System_Sucess: {
            return { systems: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const getSystemState = createFeatureSelector<ISystemState>('systemState');

export const getSystems = createSelector(getSystemState, (state: ISystemState) => state.systems);

export const appReducers: ActionReducerMap<IAppState> = {
    systemState: reducer
};

export function logger(logreducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
    return function(state: IAppState, action: any): IAppState {
      console.log('state', state);
      console.log('action', action);
      return logreducer(state, action);
    };
}


export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [logger]
  : [];

import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Show_ALL_System, ShowAllSystemSuccess } from './app.action';
import { ISystem } from 'src/models/system.model';
import { switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class AppEffect {

    readonly systemData: ISystem[] = [{
        id: 1,
        name: 'Mac'
    }, {
        id: 2,
        name: 'Windows'
    }, {
        id: 3,
        name: 'Linux'
    }];

    constructor(private actions$: Actions) {
    }

    @Effect()
    loadAllSystem$: Observable<Action> = this.actions$.pipe(ofType(Show_ALL_System),
    switchMap(() => of(this.systemData).pipe(
        map(res => new ShowAllSystemSuccess(res))
        )
    ));
}

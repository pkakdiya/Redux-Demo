import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ISystemState } from './store/app.state';
import { Observable } from 'rxjs';
import { ISystem } from 'src/models/system.model';
import { getSystems } from './store/app.reducer';
import { ShowAllSystem } from './store/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Redux-Demo';

  public systemData$: Observable<ISystem[]>;

  constructor(private _store: Store<ISystemState>) {
    this.systemData$ = this._store.pipe(select(getSystems));
  }

  ngOnInit(): void {
    this._store.dispatch(new ShowAllSystem());
  }
}

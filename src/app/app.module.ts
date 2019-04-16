import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './store/app.reducer';
import { AppEffect } from './store/app.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {metaReducers}),
    EffectsModule.forRoot([AppEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

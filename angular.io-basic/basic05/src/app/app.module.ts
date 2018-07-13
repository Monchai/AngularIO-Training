import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatagridviewComponent } from './components/datagridview/datagridview.component';


@NgModule({
  declarations: [
    AppComponent,
    DatagridviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

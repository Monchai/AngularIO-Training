import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';


import { CustomerService } from './shared/service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AboutComponent,
    HomeComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

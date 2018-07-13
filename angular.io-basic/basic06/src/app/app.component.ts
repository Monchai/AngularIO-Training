import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentPage;
  //---------------------------------------------
  constructor(){
    this.currentPage = 'home';
  }
  //---------------------------------------------
  public goHome(){
    console.log('Home');
    this.currentPage = 'home';
  }
  public goAbout(){
    console.log('About');
    this.currentPage = 'about';
  }
  public goCustomer(){
    console.log('Customer');
    this.currentPage = 'customer';
  }
  //---------------------------------------------
  public get isHomePage(){
    return this.currentPage=='home';
  }
  public get isAboutPage(){
    return this.currentPage=='about';
  }
  public get isCustomerPage(){
    return this.currentPage=='customer';
  }
  //---------------------------------------------
}

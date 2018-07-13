import { Component } from '@angular/core';

import { Page } from './shared/enum/page.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentPage:Page;
  //---------------------------------------------
  constructor(){
    this.currentPage = Page.Home;
  }
  //---------------------------------------------
  public goHome(){
    //console.log('Home');
    //this.currentPage = 'home';   
    this.currentPage = Page.Home; 
  }
  public goAbout(){
    //console.log('About');
    //this.currentPage = 'about';
    this.currentPage = Page.About;
  }
  public goCustomer(){
    //console.log('Customer');
    // this.currentPage = 'customer';    
    this.currentPage = Page.Customer;
  }
  //---------------------------------------------
  public get isHomePage(){
    //return this.currentPage=='home';    
    return this.currentPage == Page.Home;
  }
  public get isAboutPage(){
    // return this.currentPage=='about';
    return this.currentPage == Page.About;
  }
  public get isCustomerPage(){
    //return this.currentPage=='customer'; 
    return this.currentPage == Page.Customer;   
  }
  //---------------------------------------------
}

import { Component, OnInit } from '@angular/core';

import { DataMode } from './../../shared/enum/data-mode.enum';
import { Customer } from './../../shared/model/customer';

import { CustomerService } from "./../../shared/service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public currentCustomer:Customer;
  public mode:DataMode;

  public title:string;
  //--------------------------------------------------------
  constructor(private custService:CustomerService) {    
    this.mode = DataMode.View;
    this.title = 'Customer Detail Title';
  }
  //--------------------------------------------------------
  ngOnInit() {
  }
  //--------------------------------------------------------
  public displayCustomer(cust){
    this.currentCustomer = cust;
  }
  //--------------------------------------------------------
  public get customers():Array<Customer>{
    return this.custService.getCustomers;
  }
  //--------------------------------------------------------
  public addNew(){
    this.currentCustomer = new Customer();
    this.mode = DataMode.Add;
  }
  //------------------------------------
  public get isEditMode(){
    return (this.mode!=DataMode.View);
  }
  //------------------------------------
  public saveData(){
    this.custService.saveNewCustomer(this.currentCustomer);
    this.mode= DataMode.View;
  }
  //------------------------------------
  public cancelEdit(){
    this.mode= DataMode.View;
  }
  //------------------------------------
}

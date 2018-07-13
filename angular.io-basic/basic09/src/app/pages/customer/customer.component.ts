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

  constructor(private custService:CustomerService) {    
    this.mode = DataMode.View;
    //this.custService.loadCustomer();
  }

  ngOnInit() {
  }
  //--------------------------------------------------------
  public get customers():Array<Customer>{
    return this.custService.getCustomers;
  }
  //--------------------------------------------------------
  // public loadCustomer(){

  //   //this.customers = [];
  //   this.customers = new Array<Customer>();

  //   let cust_01 = new Customer();
  //   cust_01.id = 1; cust_01.code = 'C-001'; cust_01.firstname = 'AAAAA'; cust_01.lastname = 'aaaa';
  //   let cust_02 = new Customer();
  //   cust_02.id = 2; cust_02.code = 'C-002'; cust_02.firstname = 'BBBB'; cust_02.lastname = 'bbbb';
  //   let cust_03 = new Customer();
  //   cust_03.id = 3; cust_03.code = 'C-003'; cust_03.firstname = 'CCCC'; cust_03.lastname = 'cccc';
    
  //   this.customers.push(cust_01);
  //   this.customers.push(cust_02);
  //   this.customers.push(cust_03);

  //   // this.customers.push({ id:1, code: 'C-001', firstname:'aaaa', lastname:'AAA' });
  //   // this.customers.push({ id:2, code: 'C-002', firstname:'bbb', lastname:'BBB' });
  //   // this.customers.push({ id:3, code: 'C-003', firstname:'ccc', lastname:'CCC' });

  // }
  //------------------------------------
  public addNew(){
    //this.mode = 'edit';
    this.currentCustomer = new Customer();
    this.mode = DataMode.Add;
  }
  //------------------------------------
  public get isEditMode(){
    //return this.mode=='edit';
    // return (this.mode==DataMode.Add) || (this.mode==DataMode.Edit);
    return (this.mode!=DataMode.View);

  }
  public saveData(){

    //this.currentCustomer_ID = this.customers[this.customers.length-1].id+1;
    // if(this.mode== DataMode.Add){
    //   this.currentCustomer.id = this.customers[this.customers.length-1].id+1;
    //   this.customers.push(this.currentCustomer);
    // }

    //this.customers.push({ id: this.currentCustomer_ID, code: this.currentCustomer_Code, firstname: this.currentCustomer_Firstname, lastname: this.currentCustomer_Lastname });
    //this.customers.push({ id: this.currentCustomer_ID, code: this.currentCustomer_Code, firstname: this.currentCustomer_Firstname, lastname: this.currentCustomer_Lastname });
    
    //this.clearData();
    //console.log(this.currentCustomer);
    this.custService.saveNewCustomer(this.currentCustomer);

    this.mode= DataMode.View;
  }
  public cancelEdit(){
    //this.clearData();
    this.mode= DataMode.View;
  }

  private clearData(){
    //this.currentCustomer = new Customer();
    // this.currentCustomer_ID = 0;
    // this.currentCustomer_Code = '';
    // this.currentCustomer_Firstname  = '';
    // this.currentCustomer_Lastname = '';
  }
}

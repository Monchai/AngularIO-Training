import { Injectable } from '@angular/core';
import { Customer } from './../model/customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private customers:Array<Customer>;

  //---------------------------------------------------
  constructor() {
    this.customers = new Array<Customer>();
    this.loadCustomer();
  }
  //---------------------------------------------------
  public get getCustomers():Array<Customer>{
    return this.customers;
  }
  //---------------------------------------------------
  //public loadCustomer():Array<Customer>{
  public loadCustomer(){

    this.customers.length = 0;

    let cust_01 = new Customer();
    cust_01.id = 1; cust_01.code = 'C-001'; cust_01.firstname = 'AAAAA'; cust_01.lastname = 'aaaa';
    let cust_02 = new Customer();
    cust_02.id = 2; cust_02.code = 'C-002'; cust_02.firstname = 'BBBB'; cust_02.lastname = 'bbbb';
    let cust_03 = new Customer();
    cust_03.id = 3; cust_03.code = 'C-003'; cust_03.firstname = 'CCCC'; cust_03.lastname = 'cccc';

    this.customers.push(cust_01);
    this.customers.push(cust_02);
    this.customers.push(cust_03);

    //return this.customers;

  }
  //---------------------------------------------------
  public saveNewCustomer(newCust:Customer):boolean{
    console.log('newCust : ', newCust.id);
    if(newCust.id == 0){
      newCust.id = this.customers[this.customers.length-1].id+1;
      this.customers.push(newCust);
    }
    //---------------------------------------------------
    
    console.log('service customers : ', this.customers);

      return true;
  }
  //---------------------------------------------------

  //---------------------------------------------------
}

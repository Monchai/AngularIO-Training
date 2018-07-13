import { Component, OnInit } from '@angular/core';

import { CustomerService } from './../../shared/service/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private pageHeader:string = 'description';

  constructor(private custService:CustomerService) {
    
  }

  ngOnInit() {
  }

  public get customerCount():number{
    //return 0;
    return this.custService.getCustomers.length;
  }


}

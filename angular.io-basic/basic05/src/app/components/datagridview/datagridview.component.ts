import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagridview',
  templateUrl: './datagridview.component.html',
  styleUrls: ['./datagridview.component.css']
})
export class DatagridviewComponent implements OnInit {

  private customers = [];

  // ------------------------------
  constructor() {    
    this.loadData();
    console.log(this.customers);
  }
  // ------------------------------
  ngOnInit() {
  }
  // ------------------------------
  private loadData(){
    this.customers = [];
    this.customers.push({ id : 1, code: 'C-001', firstname: 'สมหวัง', lastname: 'aaaa' });
    this.customers.push({ id : 2, code: 'C-002', firstname: 'สมควร', lastname: 'vvvv' });
    this.customers.push({ id : 3, code: 'C-003', firstname: 'สมใจ', lastname: 'ccccc' });
  }
  // ------------------------------

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  public title = '';


  // ---------------------------------
  constructor() {
    this.title = 'Home Component Ready !!!!'
  }
  // ---------------------------------
  private changeTitle(){
    this.title = 'new Title';
  }
}

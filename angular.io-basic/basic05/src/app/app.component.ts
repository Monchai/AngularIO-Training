import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public isShowDG = false;

  public swapShowDG(){
    this.isShowDG=!this.isShowDG;
  }

}

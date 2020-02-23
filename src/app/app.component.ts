import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  damplearningTitle = 'damplearning';
  downloadinternetSubtitle = 'Click here to download the Internet';
  onbuttonClick():void{
  this.downloadinternetSubtitle = "You've successfully installed the Internet"


  }
}

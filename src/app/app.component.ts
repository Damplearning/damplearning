import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
damplearningTitle = 'damplearning';
  downloadinternetSubtitle = 'Click here to download the Internet';

  constructor(private router: Router) {}

  onbuttonClick():void{
  this.downloadinternetSubtitle = "You've successfully installed the Internet"
    this.router.navigate(['/tables'])
  }
}

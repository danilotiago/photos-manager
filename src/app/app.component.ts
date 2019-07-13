import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Array<any> = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/439px-Microsoft_logo.svg.png',
      description: 'Microsoft'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/439px-Microsoft_logo.svg.png',
      description: 'Microsoft'
    }
  ];
}

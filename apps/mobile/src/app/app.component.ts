import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'theapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];
  constructor(
  ) {
    this.initializeApp();
  }

  initializeApp() {

  }
}

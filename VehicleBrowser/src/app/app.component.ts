import { Component } from '@angular/core';

interface IMenuEntry {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VehicleBrowser';
  menuEntries: IMenuEntry[] = [
    { name: 'about', url: '/about' },
    { name: 'models', url: '/models' }
  ];
}

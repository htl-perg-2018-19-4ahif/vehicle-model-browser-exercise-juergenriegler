import { Component, OnInit, Input } from '@angular/core';

interface IMenuEntry {
  name: string;
  url: string;
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  @Input() menuEntries: IMenuEntry[];

  constructor() { }

  ngOnInit() {
  }

}
import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  mainMenu = [
    {path: 'home', label: 'Home'},
    {path: 'todo', label: 'Todo'},
    {path: 'about', label: 'About'}
  ];

}

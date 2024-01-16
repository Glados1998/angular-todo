import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  links = [
    {path: '/todo', label: 'Todo'},
    {path: '/about', label: 'About'}
  ];

}

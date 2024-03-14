import {Component} from '@angular/core';
import {HEADER_LINKS} from "../../data/menu_data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  mainMenu = HEADER_LINKS;
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {routes} from '../../../assets/MyRoutes';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  nav(path: string) {
    this.router.navigate([path]).then().catch(console.error.bind(console));
  }

  protected readonly routes = routes;
}

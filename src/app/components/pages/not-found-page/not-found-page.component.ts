import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: false,

  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']).then().catch((e)=>console.log(e)); // ינתב את המשתמש לדף הבית
  }
}

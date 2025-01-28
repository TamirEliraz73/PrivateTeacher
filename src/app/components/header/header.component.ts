import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyRoutes, routes} from '../../../assets/MyRoutes';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public currentUrl: string = '';
  protected isMenuOpen: boolean = false;
  protected readonly routes: MyRoutes[] = routes;

  public constructor(private router: Router) {}

  ngOnInit() {
    // שמירה של ה-URL הנוכחי
    this.currentUrl = this.router.url;
    // מאזין לשינויים ב-URL
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  protected nav(path: string): void {
    this.router.navigate([path]).then().catch(console.error.bind(console));
  }


  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  protected changeLanguage(code: string): void {
    document.dir = code === 'he' ? 'rtl' : 'ltr';
    this.toggleMenu();
  }
  public isActive(path: string): boolean {
    return this.currentUrl === '/' + path;
  }
}

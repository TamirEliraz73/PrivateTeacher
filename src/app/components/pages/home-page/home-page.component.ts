import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  onSubmit(): void {
    alert('הטופס נשלח בהצלחה!');
    // כאן אפשר להוסיף לוגיקה לשליחת הטופס לשרת
  }
}

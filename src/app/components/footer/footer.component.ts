import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {MySocial} from '../../../assets/types/MySocial';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected socialLinks: MySocial[] = [
    {name: 'Discord', href: 'https://www.discord.gg/'},
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/tamireliraz/'},
    {name: 'GitHub', href: 'https://www.github.com/TamirEliraz73'},
    {name: 'Gmail', href: 'https://www.gmail.com'},
    {name: 'WhatsApp', href: 'https://wa.me/972586642885?text=שלום%2C%20אני%20רוצה%20לקבוע%20שיעור'},
    {name: 'YouTube', href: 'https://www.youtube.com/channel/'}
  ]
}

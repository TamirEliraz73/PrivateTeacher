import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-home-container',
  standalone: false,

  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent implements OnChanges{
  @Input() public title!: string;
  @Input() public paras!: string[];

  parsedParas: { type: string; content: string }[][] = [];

  ngOnChanges(): void {
    this.parsedParas = this.paras.map(par => this.parseParagraph(par));
  }

  private parseParagraph(paragraph: string): { type: string; content: string }[] {
    const regex = /<strong>(.*?)<\/strong>|([^<]+)/g;
    const result = [];
    let match;
    while ((match = regex.exec(paragraph)) !== null) {
      if (match[1]) {
        result.push({ type: 'strong', content: match[1] });
      } else if (match[2]) {
        result.push({ type: 'text', content: match[2] });
      }
    }
    return result;
  }
}

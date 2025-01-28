import {Component} from '@angular/core';

@Component({
  selector: 'app-subjects-page',
  standalone: false,
  templateUrl: './subjects-page.component.html',
  styleUrl: './subjects-page.component.scss'
})
export class SubjectsPageComponent {
  protected isCS: boolean = true;
  protected isCSA: boolean = false;
  protected isMA: boolean = false;
  protected isFY: boolean = false;
  protected isEN: boolean = false;
  protected isHI: boolean = false;

  protected cs(): void {
    this.disableALL();
    this.isCS = true;
  }

  protected csa(): void {
    this.disableALL();
    this.isCSA = true;
  }

  protected ma(): void {
    this.disableALL();
    this.isMA = true;
  }

  protected fy(): void {
    this.disableALL();
    this.isFY = true;
  }

  protected en(): void {
    this.disableALL();
    this.isEN = true;
  }

  protected hi(): void {
    this.disableALL();
    this.isHI = true;
  }

  private disableALL(): void {
    this.isCS = false;
    this.isCSA = false;
    this.isMA = false;
    this.isFY = false;
    this.isEN = false;
    this.isHI = false;
  }
}

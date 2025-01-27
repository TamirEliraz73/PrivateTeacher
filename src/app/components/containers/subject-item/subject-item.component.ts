import {Component, Input} from '@angular/core';
import {MySubject} from '../../../../assets/types/MySubject';

@Component({
  selector: 'app-subject-item',
  standalone: false,

  templateUrl: './subject-item.component.html',
  styleUrl: './subject-item.component.scss'
})
export class SubjectItemComponent {
  @Input() subject!: MySubject;
  // subjects: MySubject[] = [
  //   {name: 'Java', color: '#16a085', icon: 'fab fa-java'},
  //   {name: 'C++', color: '#2980b9', icon: 'fas fa-code'},
  //   {name: 'Linear Algebra', color: '#e67e22', icon: 'fas fa-square-root-alt'},
  //   {name: 'English', color: '#8e44ad', icon: 'fas fa-language'}
  // ];
}

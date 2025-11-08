import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diploma',
  standalone: true,
  imports: [],
  templateUrl: './diploma.component.html',
  styleUrl: './diploma.component.scss'
})
export class DiplomaComponent {
  @Input() widthSize: string = '50px'
  @Input() heightSize : string = '50px'
}

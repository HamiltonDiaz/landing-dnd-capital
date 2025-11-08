import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diamond',
  standalone: true,
  imports: [],
  templateUrl: './diamond.component.html',
  styleUrl: './diamond.component.scss'
})
export class DiamondComponent {
  @Input() widthSize: string = '50px'
  @Input() heightSize : string = '50px'
}

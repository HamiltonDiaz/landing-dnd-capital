import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ImageModule, ButtonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  constructor(public router: Router) { }
}

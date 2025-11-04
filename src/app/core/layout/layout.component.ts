import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,TopbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

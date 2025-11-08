import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    Menubar,
    InputTextModule,
    AvatarModule,
    BadgeModule,
    CommonModule,
    ImageModule,
    ButtonModule,
    OverlayBadgeModule,
    Ripple
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  showScrollButton: boolean = false;

  constructor(public router: Router) {}
  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
        fragment: 'index-home',
      },
      {
        label: 'Acommodations',
        icon: 'pi pi-shop',
        routerLink: '/home',
        fragment: 'acommodations',
      },
      {
        label: 'About Us',
        icon: 'pi pi-users',
        routerLink: '/home',
        fragment: 'about-us',
      },
      {
        label: 'Testimonials',
        icon: 'pi pi-comments',
      },
      {
        label: 'Contacts',
        icon: 'pi pi-address-book',
        routerLink: '/contacts',
      },
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Mostrar el botón solo cuando se haya scrolleado más de 200px
    this.showScrollButton = window.pageYOffset > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openWhatsApp() {
    const phoneNumber = '573001234567'; // TODO: pasar a variable
    const message = encodeURIComponent(
      'Hola, me gustaría obtener más información'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
}

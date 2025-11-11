import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
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
import { MessageModule } from 'primeng/message';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { environment } from 'src/enviroments/environment';

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
    Ripple,
    MessageModule,
    RouterLink
],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  showScrollButton: boolean = false;
  email: string = environment.contactEmail;
  phoneNumber: string = environment.phoneNumber;
  visibleCookie: boolean = false;

  constructor(public router: Router, private scrollService: ScrollService) {}
  ngOnInit(): void {
    this.loadItems();
    this.handleFragmentScroll();

    //this.visibleCookie = !(localStorage.getItem('cookiesAccepted') === 'true'); TODO: pendiente implementar
    
  }

  handleFragmentScroll(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          this.scrollService.scrollToElement(tree.fragment, 100);
        }
      });
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
        routerLink: '/home',
        fragment: 'testimonials',
      },
      {
        label: 'Blog',
        icon: 'pi pi-megaphone',
        routerLink: '/home',
        fragment: 'blog',
      },
      {
        label: 'Contacts',
        icon: 'pi pi-address-book',
        routerLink: '/contact-us',
      },
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;

    // Mostrar el botón solo cuando se haya scrolleado más de 200px
    this.showScrollButton = scrollPosition > 200;

    // Eliminar el fragmento cuando el scroll está arriba (menos de 200px)
    if (scrollPosition < 1 && window.location.hash) {
      const urlWithoutFragment =
        window.location.pathname + window.location.search;
      history.replaceState(null, '', urlWithoutFragment);
    }
  }

  scrollToTop() {
    // Eliminar el fragmento de la URL sin navegar
    if (window.location.hash) {
      const urlWithoutFragment =
        window.location.pathname + window.location.search;
      history.replaceState(null, '', urlWithoutFragment);
    }

    // Hacer scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openWhatsApp() {
    const message = encodeURIComponent(
      'Hello, I would like to get more information.'
    );
    window.open(`https://wa.me/${this.phoneNumber}?text=${message}`, '_blank');
  }

  acceptCookies() {
    this.visibleCookie = false;
    localStorage.setItem('cookiesAccepted', 'true');
  }
}

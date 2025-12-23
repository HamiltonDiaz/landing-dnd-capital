import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { PhotoService } from 'src/app/core/services/photo.service';
import { imagesDto } from 'src/app/core/dto/images.dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CardModule, ButtonModule, DividerModule, GalleriaModule, ImageModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [PhotoService],
})
export class FooterComponent implements OnInit {
  displayCustom: boolean = false;
  activeIndex: number = 0;
  images: imagesDto[] = [];
  email: string = environment.contactEmail;

  constructor(public router: Router, private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getImages().then(images => {
      this.images = images;
    });
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDto } from 'src/app/core/dto/blog.dto';
import { BlogService } from 'src/app/core/services/blog.service';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, DividerModule, ImageModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  blogData: BlogDto[] = [];
  email:string = environment.contactEmail;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getDataPromise().then((items) => {
      this.blogData = items;
    });
  }
}

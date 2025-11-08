import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: 'assets/img/carrousel/img-1.png',                
                alt: 'Image 1',
                title: 'Image 1'
            },
            {
                itemImageSrc: 'assets/img/carrousel/img-2.png',
                alt: 'Image 2',
                title: 'Image 2'
            },
            {
                itemImageSrc: 'assets/img/carrousel/img-3.png',
                alt: 'Image 3',
                title: 'Image 3'
            },
            {
                itemImageSrc: 'assets/img/carrousel/img-4.png',
                alt: 'Image 4',
                title: 'Image 4'
            },
            {
                itemImageSrc: 'assets/img/carrousel/img-5.png',
                alt: 'Image 5',
                title: 'Image 5'
            },
            {
                itemImageSrc: 'assets/img/carrousel/img-6.png',
                alt: 'Image 6',
                title: 'Image 6'
            },
            
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};
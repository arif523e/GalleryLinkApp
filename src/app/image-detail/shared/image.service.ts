import { Injectable } from '@angular/core';


@Injectable()
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
    {"id": 1, "category": "casual", "caption": "casual sunday look", "url":"/assets/img/boat_01.jpeg"},
    {"id": 2, "category": "buisness casual", "caption": "monday work look", "url":"assets/img/outfit_2.png"},
    {"id": 3, "category": "buisness casual", "caption": "tuesday work look", "url":"assets/img/outfit_3.png"},
    {"id": 4, "category": "casual", "caption": "casual saturday look", "url":"assets/img/outfit_4.png"},
    {"id": 5, "category": "formal", "caption": "thursday work look", "url":"assets/img/outfit_5.png"},
    {"id": 6, "category": "formal", "caption": "friday work look", "url":"assets/img/outfit_6.png"},
    {"id": 7, "category": "casual", "caption": "casual sunday look", "url":"assets/img/outfit_7.png"},
    {"id": 8, "category": "casual", "caption": "casual sunday look", "url":"assets/img/outfit_8.png"},
    {"id": 9, "category": "casual", "caption": "casual sunday look", "url":"assets/img/outfit_9.png"},
    {"id": 10, "category": "casual", "caption": "casual sunday look", "url":"assets/img/outfit_10.png"}
]
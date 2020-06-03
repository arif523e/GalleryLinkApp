//Onchanges is a lifecycle hook. When something in this ts file changes, that's 
//when filtering happens .It updates images
import { Component, OnInit, Input ,OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,OnChanges{
  
  title = 'Recent Photos'
  //Creating an input property filterby ('?' means it's optional)
  @Input() filterBy? : string = 'all';
  visibleImages: any[] = [];
  
  userName = '';

   //Injecting instacne of Imageserivce so that visibleImages array is easy to use
  constructor(private imageService: ImageService, private myService:MyserviceService,
    private _router: Router,){
    this.myService.getUserName()
    .subscribe(
      data => this.userName= data.toString(),
      error => this._router.navigate(['/users/login'])
    );
    this.visibleImages = this.imageService.getImages();
  }
  //This will delete the jwt token from local storage and route user back to login page
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/users/login'])
  }
  ngOnInit(){
  
  }
  //Updates images when a change is made in the browser
  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }
}

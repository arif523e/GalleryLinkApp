import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import {ReactiveFormsModule } from '@angular/forms'

import { ImageFilterPipe } from './image-detail/shared/filter.pipe'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { ImageService } from './image/shared/image.service';
import { ImageComponent } from './image/image.component';
import { appRoutes } from '../routes';
import { LinktoolComponent } from './linktool/linktool.component'

import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageComponent,
    ImageFilterPipe,
    LinktoolComponent,
    RegisterComponent,
    LoginComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService,ImageFilterPipe, MyserviceService],
  bootstrap: [AppComponent]
})

export class AppModule { }

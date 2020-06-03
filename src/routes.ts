import { Routes } from '@angular/router'
import { GalleryComponent } from './app/gallery/gallery.component'
import { ImageDetailComponent } from './app/image/image-detail.component'
import { LoginComponent } from "./app/login/login.component"
import { RegisterComponent } from "./app/register/register.component"
export const appRoutes:Routes = [
    //Creating objects for each routes you want to provide in app aka gallery/image components
    {path: "gallery", component: GalleryComponent},
    
    //'/:' is a route parameter. It matches the id of the photo that you are looking at
    {path: "image/:id", component: ImageDetailComponent},
    //This is redirecting to gallery when there is nothing in the url

    //{path: "", redirectTo: "/gallery", pathMatch: "full"},
    {path: "users/login", component: LoginComponent},
    {path: "", redirectTo: "/users/login", pathMatch: "full"},

    {path: "users/register", component: RegisterComponent }

]
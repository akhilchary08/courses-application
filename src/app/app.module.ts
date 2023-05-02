import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { CoursesListComponent } from './Components/courses-list/courses-list.component';
import { CourseComponent } from './Components/course/course.component';
import { CreateCourseComponent } from './Components/create-course/create-course.component';
import { CoursesService } from './Services/courses.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesListComponent,
    CourseComponent,
    CreateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

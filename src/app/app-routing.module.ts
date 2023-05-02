import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './Components/courses-list/courses-list.component';
import { CreateCourseComponent } from './Components/create-course/create-course.component';

const routes: Routes = [
  {
    path:'',
    component:CoursesListComponent,
    pathMatch:'full'
  },
  {
    path:'addcourse',
    component:CreateCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

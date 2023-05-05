import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './Components/courses-list/courses-list.component';
import { CreateCourseComponent } from './Components/create-course/create-course.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';

const routes: Routes = [
  {
    path:'courses',
    component:CoursesListComponent,
    pathMatch:'full'
  },
  {
    path:'addcourse',
    component:CreateCourseComponent,
  },
  {
    path:'',
    redirectTo:'courses',
    pathMatch:'full'
  },{
    path:'login',
    component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

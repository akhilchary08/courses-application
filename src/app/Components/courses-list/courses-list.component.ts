import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';
import { course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  coursesData:course[]=[];
  constructor(private coursesService:CoursesService){
    
  }
  loadCourses():void{
    this.coursesService.getCourses().subscribe(data=>{
      this.coursesData=data;
    })
  }
  ngOnInit():void{
    this.loadCourses();
  }
}

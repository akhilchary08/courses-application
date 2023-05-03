import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Component, Input } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';
import { course } from 'src/app/interfaces/course';
import { CoursesListComponent } from '../courses-list/courses-list.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  constructor(private coursesService: CoursesService,private coursesListComp:CoursesListComponent) {}
  @Input() courseData: course | any;

  onDelete(): any {
    if (confirm(`${this.courseData.title} course will be deleted`)) {
      this.coursesService
        .deleteCourse(this.courseData.id)
        .subscribe((data: any) => {
          this.coursesListComp.loadCourses()
        });
    }
  }
}

import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: [
    './course.component.css',
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() courseData: course | any;
}

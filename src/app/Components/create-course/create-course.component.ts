import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent {
  constructor(
    private formBuilder: FormBuilder,
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  courseForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    duration: ['', Validators.required],
    date: [new Date(), Validators.required],
  });

  getCourseData() {
    return {
      title: this.courseForm.value.title,
      description: this.courseForm.value.description,
      duration: this.courseForm.value.duration,
      date: this.courseForm.value.date,
    };
  }
  onSubmit(): void {
    this.courseService
      .addCourse(this.getCourseData())
      .subscribe((data: any) => {
        this.router.navigate([''], { relativeTo: this.route });
      });
  }
  onCancel(): void {
    this.router.navigate([''], { relativeTo: this.route });
  }
}

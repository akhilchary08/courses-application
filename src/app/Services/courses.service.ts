import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: course[] = [
    {
      title: 'course1 ',
      description: 'course1 desc',
      duration: 12,
      date: new Date(12),
    },
    {
      title: 'course2 ',
      description: 'course2 desc',
      duration: 52,
      date: new Date(796),
    },
  ];
  constructor() {}
  getCourses(): Observable<course[]> {
    return new BehaviorSubject<course[]>(this.courses) as Observable<course[]>;
    // this.courses as Observable<course[]>;
  }
}

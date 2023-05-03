import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { course } from '../interfaces/course';
import { v4 } from 'uuid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}
  private deleteCourseSubject = new BehaviorSubject<course>({
    id: '',
    title: ' ',
    description: '',
    duration: 0,
    date: new Date(0),
  });
  setDeletedCourse(course: course) {
    this.deleteCourseSubject.next(course);
  }
  getDeletedCourse(){
    return this.deleteCourseSubject;
  }

  private _url = 'http://localhost:3000/courses';
  getCourses(): Observable<course[]> {
    return this.http.get<course[]>(this._url);
  }
  addCourse(newCourse: any): any {
    console.log(newCourse, ' new');
    return this.http.post(this._url, {
      id: v4().substring(0, 6),
      ...newCourse,
    });
  }
  deleteCourse(id:string): any {
    console.log('delete');
    let courseData:course;
    // this.deleteCourseSubject.asObservable().subscribe((data) => {
      console.log(`${this._url}/${id}`,"  delete data")
      return this.http.delete(`${this._url}/${id}`);
    // });
  }
}

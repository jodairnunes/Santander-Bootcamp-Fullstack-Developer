import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit{

  courses: Course[] = [];

  ngOnInit(): void {
      this.courses = [
        {
          id: 1,
          name: 'Angular: Forms',
          imageUrl: 'images/forms.png',
          price: 99.99,
          code: 'XPS-8796',
          duration: 120,
          rating: 4.5,
          releaseDate: 'November, 4, 2019',
        },
        {
          id: 2,
          name: 'Angular: Http',
          imageUrl: 'images/http.png',
          price: 45.99,
          code: 'LKL-1094',
          duration: 120,
          rating: 4,
          releaseDate: 'November, 8, 2019',
        },
      ]
  }
}

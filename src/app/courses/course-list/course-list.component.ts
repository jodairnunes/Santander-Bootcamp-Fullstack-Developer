import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from '../../services/course.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit{

  _courses: Course[] = [];
  _filteredCourses: Course[] = [];
  _filterBy: string = '';
  
  constructor(readonly courseService: CourseService, readonly config: NgbRatingConfig ) {
    config.max = 5;
		config.readonly = true;
  }
  
  ngOnInit(): void {
    this.retrieveAll();
  }
  
  retrieveAll(): void {
    this.courseService.retriveAll().subscribe({
      next: response => {
        this._courses = response;
        this._filteredCourses = this._courses;
      }, error: err => {
        console.log('Error: ', err);
      }
    }); 
  }


  
  deleteById(id: number): void {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      }
    })
  }


  set filter(value: string){
    this._filterBy = value;
    this._filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  // get filter() {
  //   return this._filterBy;
  // }

}

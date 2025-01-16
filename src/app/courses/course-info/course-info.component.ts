import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course-list/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.scss',
})
export class CourseInfoComponent implements OnInit {
  courseId: string | null = '';
  idCourse!: number;
  idCourseString!: string;
  course: Course | undefined;
  courseFind!: Course;

  constructor(
    readonly activatedRoute: ActivatedRoute,
    readonly courseService: CourseService
  ) {}

  ngOnInit(): void {
    // // Obter o parâmetro 'id' da rota
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // // Garantir que `courseId` não seja nulo antes de usar
    // if (this.courseId) {
    //   this.idCourse = parseInt(this.courseId, 10);
    //   // Buscar o curso por ID
    //   this.course = this.courseService.retriveById(this.idCourse);
    //   // Garantir que um curso seja encontrado
    //   if(this.course){
    //     this.courseFind = this.course;
    //   }
    // }
    this.retrieveCourseById();
  }

  retrieveCourseById(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.courseId){
      this.idCourse = parseInt(this.courseId, 10);
      this.idCourseString = this.idCourse.toString();
      this.courseService.retriveById(this.idCourseString).subscribe({
        next: course => {
          this.course = course;
          if(this.course){
            this.courseFind = this.course;
          }
        }, error: err => console.log('Error: ', err)
      })
    }
  }

  save(): void {
    this.courseService.save(this.courseFind).subscribe({
      next: course => console.log('Course save with success!'),
      error: err => console.log('Error', err)
    });
  }
}

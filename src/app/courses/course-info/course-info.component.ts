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
  course: Course | undefined;
  courseFind!: Course;

  constructor(
    readonly activatedRoute: ActivatedRoute,
    readonly courseService: CourseService
  ) {}

  ngOnInit(): void {
    // Obter o parâmetro 'id' da rota
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // Garantir que `courseId` não seja nulo antes de usar
    if (this.courseId) {
      this.idCourse = parseInt(this.courseId, 10);
      // Buscar o curso por ID
      this.course = this.courseService.retriveById(this.idCourse);
      // Garantir que um curso seja encontrado
      if(this.course){
        this.courseFind = this.course;
      }
    }
  }

  save(): void {
    this.courseService.save(this.courseFind);
  }
}

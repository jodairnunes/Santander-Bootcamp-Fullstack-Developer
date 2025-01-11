import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.scss'
})
export class CourseInfoComponent implements OnInit{

  courseId: string | null = '';

  constructor(readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

import { Injectable } from '@angular/core';
import { Course } from '../courses/course-list/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  urlApi = 'http://localhost:3000/courses'

  constructor(readonly http: HttpClient) { }

  retriveAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.urlApi);
  }

  retriveById(id: string): Observable<Course>{
    // return COURSES.find((courseIterator: Course) => courseIterator.id === id);
    return this.http.get<Course>(`${this.urlApi}/${id}`);
  }

  save(course: Course): Observable<Course>{
    // if(course.id){
    //   const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
    //   COURSES[index] = course;
    // }
    if(course.id) {
      return this.http.put<Course>(`${this.urlApi}/${course.id}`, course)
    }else {
      return this.http.post<Course>(this.urlApi, course)
    }
  }

  deleteById(id: number): Observable<any>{
    return this.http.delete<any>(`${this.urlApi}/${id}`);
  }
}


const COURSES: Course[] = [
  {
      id: 1,
      name: 'Angular: CLI',
      releaseDate: 'November 2, 2019',
      description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duration: 120,
      code: 'xls-1212',
      rating: 3,
      price: 12.99,
      imageUrl: '/images/cli.png',
  },
  {
      id: 2,
      name: 'Angular: Forms',
      releaseDate: 'November 4, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duration: 80,
      code: 'DWQ-3412',
      rating: 3.5,
      price: 24.99,
      imageUrl: '/images/forms.png',
  },
  {
      id: 3,
      name: 'Angular: HTTP',
      releaseDate: 'November 8, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duration: 80,
      code: 'QPL-0913',
      rating: 4.0,
      price: 36.99,
      imageUrl: '/images/http.png',
  },
  {
      id: 4,
      name: 'Angular: Router',
      releaseDate: 'November 16, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duration: 80,
      code: 'OHP-1095',
      rating: 4.5,
      price: 46.99,
      imageUrl: '/images/router.png',
  },
  {
      id: 5,
      name: 'Angular: Animations',
      releaseDate: 'November 25, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duration: 80,
      code: 'PWY-9381',
      rating: 5,
      price: 56.99,
      imageUrl: '/images/animations.png',
  }
]
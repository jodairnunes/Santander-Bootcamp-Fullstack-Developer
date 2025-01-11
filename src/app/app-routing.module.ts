import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseInfoComponent } from './courses/course-info/course-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full' },
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/info/:id', component: CourseInfoComponent},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './shared/components/star/star.component';
import { CarrosselComponent } from './teste/carrossel/carrossel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    CarrosselComponent,
    ReplacePipe,
    NavbarComponent,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

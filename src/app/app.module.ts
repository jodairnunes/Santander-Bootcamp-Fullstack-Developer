import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { StarComponent } from './star/star/star.component';
import { CarrosselComponent } from './teste/carrossel/carrossel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from './pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    CarrosselComponent,
    ReplacePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

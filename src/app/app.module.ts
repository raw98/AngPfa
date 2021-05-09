import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentComponent } from './student/student.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { CardComponent } from './card/card.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './service/course.service';


const routes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'courses', component : CoursesComponent},
  {path : 'aboutus', component : AboutusComponent},
  {path : 'contact', component: ContactComponent},
  {path : '404', component: NotfoundComponent},
  {path:'student',component:StudentComponent},
  {path:'card',component:CardComponent},
  {path:'course',component:CourseComponent},
  { path : '**' , redirectTo : '404' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    CoursesComponent,
    ContactComponent,
    NotfoundComponent,
    StudentComponent,
    CardComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    RouterModule.forRoot(routes),
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

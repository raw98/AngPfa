import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  allCourse=[];


  constructor(private courseService : CourseService) { }

  ngOnInit(): void {
    this.allCourse=this.courseService.allCourse;
  }
}

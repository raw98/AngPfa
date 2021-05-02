import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  course: string;
  subscribtion:string;
  progress: number;
  certificate: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},
  {course:'Angular',subscribtion:'20/12/2020',progress:50,certificate: 0},  
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  opened: boolean;
  constructor() { }
  displayedColumns: string[] = ['course', 'subscribtion', 'progress', 'certificate'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.opened=true;
  }

}

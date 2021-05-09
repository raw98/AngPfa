import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  allCourse=[
    {img:"../../assets/img/angular.jpg ",name:"Angular",description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    ,price:40, note:"★ ★ ★ ★ ☆"},
    {img:"../../assets/img/php.jpg ",name:"PHP",description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    ,price:40, note:"★ ★ ★ ★ ☆"},
    {img:"../../assets/img/machine.jpg ",name:"Angular",description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    ,price:40, note:"★ ★ ★ ★ ☆"},
    {img:"../../assets/img/angular.jpg ",name:"Angular",description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    ,price:40, note:"★ ★ ★ ★ ☆"},
    {img:"../../assets/img/php.jpg ",name:"PHP",description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    ,price:40, note:"★ ★ ★ ★ ☆"},
    {img:"../../assets/img/machine.jpg ",name:"Angular",description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    ,price:40, note:"★ ★ ★ ★ ☆"}];
  
  constructor() { }
}

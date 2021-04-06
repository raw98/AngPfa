import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const moduleMat=[
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [
    moduleMat
  ],
  exports : [
    moduleMat
  ]
})
export class MaterialModule { }

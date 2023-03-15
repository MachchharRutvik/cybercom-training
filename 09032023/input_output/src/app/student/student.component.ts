import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() parentData:any;
studentData="It is from student component";
@Output() EventEmitter: any = new EventEmitter;
emitEvent(){
  this.EventEmitter.emit(this.studentData);
}
}

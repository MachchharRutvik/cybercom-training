import { Component, OnInit,Input } from '@angular/core/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
@Input() public parentData: any;
  ngOnInit(): void {
  }

}

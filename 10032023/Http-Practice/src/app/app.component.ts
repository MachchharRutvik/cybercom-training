import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Http-Practice';
  public employees:any = [];
  constructor(private employeeService:EmployeeService){}
  ngOnInit(){
    this.employeeService.getData()
             .subscribe(data=>this.employees = data);
  }
}

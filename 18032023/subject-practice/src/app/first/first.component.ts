import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private service:NameService) {this.service.userName.subscribe(uName=>{
    this.userName=uName;
  }) }

  ngOnInit(): void {
  }
  userName: any;
  changeName(value: any){
    this.service.userName.next(value.value);
  }
}

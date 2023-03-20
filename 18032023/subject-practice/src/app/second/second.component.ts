import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private service:NameService) {this.service.userName.subscribe(uName=>{
    this.userName=uName;
  }) }

  ngOnInit(): void {
  }
  userName: any;
}

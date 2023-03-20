import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:NameService) {
    this.service.userName.subscribe(uName=>{
      this.userName=uName;
    })
   }

  ngOnInit(): void {
  }
  userName:any;

}

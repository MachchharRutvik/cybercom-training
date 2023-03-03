import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {
userId;
  constructor(private route:ActivatedRoute) { 
    console.log("user id: ",this.route.snapshot.paramMap.get("id"))
     this.userId = this.route.snapshot.paramMap.get("id")
     console.log(this.route)
  }

  ngOnInit(): void {
    
  }

}

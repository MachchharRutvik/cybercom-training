import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 userId:string | null = null ; 
 users = [
  {
    name:"Rutvik",id:"1"
  },
  {
    name:"Param",id:"2"
  },
  {
    name:"Yug",id:"3"
  },
  {
    name:"Tejas",id:"4"
  }
 ]
// @Input() users:any ;
constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log("user id: ",this.route.snapshot.paramMap.get("id"))
    //  this.userId = this.route.snapshot.paramMap.get("id")
  }
  
  // ngAfterViewInit(): void {
  //   console.log("user id: ",this.route.snapshot.paramMap.get("id"))
  //   this.userId = this.route.snapshot.paramMap.get("id")
  // }

}

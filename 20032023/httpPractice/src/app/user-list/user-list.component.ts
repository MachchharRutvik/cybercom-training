import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userData:any;

  constructor(private service:UserService) {
   
   }

  ngOnInit(): void {
     this.service.getUsers().subscribe({
      next:(res)=>{
        this.userData = res;
      },
      error:(error)=>{
        console.log("error",error);
      }
    });

  }
  update(id: any){
    let userData;
     this.service.getUserById(id).subscribe(res=>{
      userData = res;
      console.log(res);
      this.service.updateUser(id,userData).subscribe((res)=>{
        console.log(res);
      })
    }) 
  }
  delete(id: string){
    this.service.deleteUser(id).subscribe(res=>{
      console.log(res);
    })
  }
  
  
}

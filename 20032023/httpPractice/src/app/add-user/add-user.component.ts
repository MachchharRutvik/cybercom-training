import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  userId: any;
  updatedData: any;
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.userId = param['id'];
    });
    console.log(this.userId);
    if (this.userId) {
      this.service.getUserById(this.userId).subscribe((res) => {
        this.updatedData = res;
        this.userForm.patchValue({
          userName: this.updatedData.name,
          email: this.updatedData.email,
        });
      });
    }
  }
  update() {
    const userForm = this.userForm.getRawValue();
    console.log(userForm);

    const body = {
      name: userForm.userName || '',
      email: userForm.email || '',
    };

    if (this.userId && this.updatedData) {
      this.service.updateUser(this.userId, body).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/user-list']);
      });
    }
  }

  onAdd() {
    const userForm = this.userForm.getRawValue();
    console.log(userForm);

    const body = {
      name: userForm.userName || '',
      email: userForm.email || '',
    };

    this.service.addUser(body).subscribe({
      next: (response) => {
        console.log(response);
        if (response) {
          console.log('route');
          this.router.navigate(['/user-list']);
        }
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
  childFunction(){
    alert("child");
  }
}

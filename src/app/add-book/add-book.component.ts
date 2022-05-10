import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  id: number = 0;
  userform: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { 
    this.userform = this.fb.group({
      domain_name: ['', [Validators.required]],
      material: ['', [Validators.required]],
      topic:['',[Validators.required]],
      id: [0, [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userform.get('Id')?.setValue(params['id']);
        const data = this.userService.getUsersByID(this.id);
        if (data) {
          this.userform.setValue(data);
        }
      }
    });
  }
  save() {
   
    if (this.userform.get('id')?.value === 0) {
      //Create New User
      this.userService.addUser(this.userform.value);
    } else {
      //Update User info
      this.userService.updateUser(this.userform.value);
    }

    //Redirecting to table
    this.router.navigate(['/dashboard']);
  }
  resetValues(){
    this.userform.reset();
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDataService } from '../login-data.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-library-dash',
  templateUrl: './library-dash.component.html',
  styleUrls: ['./library-dash.component.scss']
})
export class LibraryDashComponent implements OnInit {
  userList: User[] = [];
  roleName:string=''

  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService,private loginDataService:LoginDataService) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
    this.roleName=this.loginDataService.role
    console.log(this.roleName);
      
  }
  table(){
    this.router.navigate(['/user']);
  }
  view(){

  }
  lend(){
    this.router.navigate(['/buy']);
  }
  add(){

  }
  edit(){

  }
  deleteBook(){
    
  }
}

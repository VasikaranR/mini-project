import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  role:string=''
  getRole(roleValue:string){
     this.role=roleValue
  }
}


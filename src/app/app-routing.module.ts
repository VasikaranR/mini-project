import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BuyComponent } from './buy/buy.component';
import { LibraryDashComponent } from './library-dash/library-dash.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 {path:'',redirectTo:'user',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'dashboard',component:LibraryDashComponent},
 {path:'user',component:UserComponent},
 {path:'buy',component:BuyComponent},
 {path:'addbook',component:AddBookComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskformComponent } from './taskform/taskform.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'taskform', component: TaskformComponent },
  { path: '**', component: LoginComponent },
  { redirectTo: '', path: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

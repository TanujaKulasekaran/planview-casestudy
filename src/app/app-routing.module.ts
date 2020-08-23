import { UserDashboardComponent } from './user/user.component';
import { AdminDashboardComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      // { path: 'register', component: RegisterComponent }
      // { path: 'register', component: AdminDashboardComponent}
      { path: 'register', component: UserDashboardComponent }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

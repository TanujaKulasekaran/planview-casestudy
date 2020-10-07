import { WorkItemComponent } from './workItem/workItem.component';
import { WorkTypeComponent } from './workType/workType.component';
import { UserDashboardComponent } from './user/user.component';
import { AdminDashboardComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { RegisterComponent } from './register/register.component';
import { SendMessageComponent } from './sendMessage/sendMessage.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'adminDashboard', component: AdminDashboardComponent},
      { path: 'userDashboard', component: UserDashboardComponent },
      { path: 'sendMessage', component: SendMessageComponent },
      { path: 'createWorkType', component: WorkTypeComponent},
      { path: 'createWorkItem', component: WorkItemComponent}
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

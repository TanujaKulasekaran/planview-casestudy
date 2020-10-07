import { WorkTypeComponent } from './workType/workType.component';
import { SendMessageComponent } from './sendMessage/sendMessage.component';
import { UserDashboardComponent } from './user/user.component';
import { AdminDashboardComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './home/welcome.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkItemComponent } from './workItem/workItem.component';

@NgModule({
  declarations: [
    // tslint:disable-next-line: max-line-length
    AppComponent, RegisterComponent, WelcomeComponent, LoginComponent, AdminDashboardComponent, UserDashboardComponent, SendMessageComponent,
    WorkTypeComponent, WorkItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

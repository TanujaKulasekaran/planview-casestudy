import { Component } from '@angular/core';

@Component({
  templateUrl: './user.component.html'
})

export class UserDashboardComponent {
  clickMessage = '';

  onSubmit() {
    this.clickMessage = 'Timesheet submitted successfully.';
  }
}

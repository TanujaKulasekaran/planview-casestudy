import { Component, OnInit } from '@angular/core';
@Component({
 templateUrl: './admin.component.html'
})

export class AdminDashboardComponent {

  clickMessage = '';

  workTypeList: Array<any> = [
    { name: 'Non-Work', workItems: ['Sick Time', 'Vacation', 'Travel', 'Company Holiday', 'Floating Holiday'] },
    { name: 'Education', workItems: ['Conference', 'Training'] },
    { name: 'Non-Project', workItems: ['Reg-U', 'Agile', 'TownHall'] },
    { name: 'Project', workItems: ['D1 Platform', 'D2 Platform'] }
  ];

  workItems: Array<any>;

  changeWorkType(workType) {
    console.log(workType);
    this.workItems = this.workTypeList.find(res => res.name === workType).workItems;
  }

  onAssign() {
    this.clickMessage = 'WorkItem assigned.';
  }

}

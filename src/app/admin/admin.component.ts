import { IRegister } from './../register/register';
import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';
@Component({
 templateUrl: './admin.component.html'
})

export class AdminDashboardComponent implements OnInit {
  constructor(private adminService: AdminService) {

  }

  allEmployees: IRegister[];
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

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.adminService.getAllEmployees().subscribe(
    (data: IRegister[]) => {
      this.allEmployees = data;
    }
    );
  }

  deleteEmployee(id: number) {
    console.log(id);
    this.adminService.deleteEmployee(id).subscribe(
    (data: IRegister) => {
      this.getAllEmployees();
    }
    );
  }
}

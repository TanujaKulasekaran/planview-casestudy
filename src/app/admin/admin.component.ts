import { IWorkItem } from './../workItem/workItem';
import { IWorkType } from './../workType/workType';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRegister } from './../register/register';
import { AdminService } from './admin.service';
import { Component, OnInit } from '@angular/core';
@Component({
 templateUrl: './admin.component.html'
})

export class AdminDashboardComponent implements OnInit {
  workAssignForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService) {

  }

  allEmployees: IRegister[];
  workTypes: IWorkType[];
  workItems: IWorkItem[];
  clickMessage = '';
  // empId;
  // firstName = '';
  // lastName = '';

  // workTypeList: Array<any> = [
  //   { name: 'Non-Work', workItems: ['Sick Time', 'Vacation', 'Travel', 'Company Holiday', 'Floating Holiday'] },
  //   { name: 'Education', workItems: ['Conference', 'Training'] },
  //   { name: 'Non-Project', workItems: ['Reg-U', 'Agile', 'TownHall'] },
  //   { name: 'Project', workItems: ['D1 Platform', 'D2 Platform'] }
  // ];

  // workItems: Array<any>;

  // changeWorkType(workType) {
  //   console.log(workType);
  //   this.workItems = this.workTypeList.find(res => res.name === workType).workItems;
  // }

  ngOnInit() {
    this.getAllEmployees();

    this.workAssignForm = this.fb.group({
      id: [''],
      //empId: this.empId,
      //firstName: this.firstName,
      //lastName: this.lastName,
      workType: [''],
      workItem: ['']
    });
  }
  selectWorkType(selectWorkType) {
    console.log('Inside selectWorkTypes');
    this.adminService.getWorkTypes().subscribe(
    (workTypes: IWorkType[]) => {this.workTypes = workTypes; }
    );
    console.log(selectWorkType.target.value);
    }

    selectWorkItem(selectWorkItem) {
      console.log('Inside selectWorkItems');
      this.adminService.getWorkItems().subscribe(
      (workItems: IWorkItem[]) => {this.workItems = workItems; }
      );
      console.log(selectWorkItem.target.value);
      }

  assign() {

    console.log('WorkAssignment-->' + JSON.stringify(this.workAssignForm.value));

    this.adminService.postWorkAssign(this.workAssignForm.value).subscribe({
    next(workAssign) {
        console.log('After Subscribe to WorkAssign' + workAssign);
      }

    });

    this.clickMessage = 'WorkItem assigned.';
  }

  getAllEmployees() {
    this.adminService.getAllEmployees().subscribe(
    (data: IRegister[]) => {
      this.allEmployees = data;
      console.log('this.allEmployees-->' + this.allEmployees );

    //   for (const entry of this.allEmployees) {
    //   console.log('Inside loop');

    //   this.empId = entry.id;
    //   console.log(this.empId);

    //   this.firstName = entry.firstName;
    //   console.log(this.firstName);

    //   this.lastName = entry.lastName;
    //   console.log(this.lastName);
    // }
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

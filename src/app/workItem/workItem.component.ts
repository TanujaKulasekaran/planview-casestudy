import { IWorkType } from './../workType/workType';
import { AdminService } from './../admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './workItem.component.html'
 })

 export class WorkItemComponent implements OnInit {
  workItemForm: FormGroup;
  saveMessage = '';
  workTypes: IWorkType[];

  constructor(private fb: FormBuilder, private adminService: AdminService) {

  }

  ngOnInit(): void {
    this.workItemForm = this.fb.group({
    id: [''],
    workItemCode: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    workItemDesc: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    workType: ['']
    });
  }

  getWorkTypes(selectWorkType) {
    console.log('Inside getWorkTypes');
    this.adminService.getWorkTypes().subscribe(
    (workTypes: IWorkType[]) => {this.workTypes = workTypes; }
    );
    console.log(selectWorkType.target.value);

  }

  save() {
    console.log('WorkItem-->' + JSON.stringify(this.workItemForm.value));

    this.adminService.postWorkItem(this.workItemForm.value).subscribe({
    next(workItem) {
        console.log('After Subscribe to WorkItem' + workItem);
      }

    });

    this.saveMessage = 'WorkItem added successfully.';
  }
 }

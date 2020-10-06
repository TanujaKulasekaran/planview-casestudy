import { AdminService } from './../admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './workType.component.html'
 })

 export class WorkTypeComponent implements OnInit {
  workTypeForm: FormGroup;
  saveMessage = '';

  constructor(private fb: FormBuilder, private adminService: AdminService) {

  }

  ngOnInit(): void {
    this.workTypeForm = this.fb.group({
    id: [''],
    workTypeCode: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    workTypeDesc: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
    });
  }

  save() {
    console.log('WorkType' + JSON.stringify(this.workTypeForm.value));

    this.adminService.postWorkType(this.workTypeForm.value).subscribe({
    next(workType) {
        console.log('After Subscribe to WorkType' + workType);
      }

    });

    this.saveMessage = 'WorkType added successfully.';
  }

 }

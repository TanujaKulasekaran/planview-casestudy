import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sendMessage.component.html'
 })

 export class SendMessageComponent {
  constructor() {

  }

  sendMailMessage = '';

  onSendMailClick() {
    this.sendMailMessage = 'Mail has been sent.';
  }

 }

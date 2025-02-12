import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class ContactFormComponent {
  contact = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    description: ''
  };

  constructor(private contactService: ContactService) {}

  messageSent = false;

  onSubmit() {
    this.contactService.sendMail(this.contact);
    this.messageSent = true;

    setTimeout(() => {
      this.messageSent = false;
    }, 5000);

    this.contact = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      description: ''
    };
  }
}
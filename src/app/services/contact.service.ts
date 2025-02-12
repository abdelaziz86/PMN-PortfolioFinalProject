import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendMail(contact: any) {
    console.log('Formulaire soumis :', contact);
  }
}
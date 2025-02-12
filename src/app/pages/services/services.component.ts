import { Component } from '@angular/core';
import { ServicesListComponent } from '../../components/services-list/services-list.component';

@Component({
  selector: 'app-services',
  imports: [ServicesListComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}

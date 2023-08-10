import { Component, Input } from '@angular/core';
import Client from '../../entities/Client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
    @Input() client : Client|null  = null;
}

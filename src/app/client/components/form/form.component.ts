import { Component, Input } from '@angular/core';
import Client from 'src/app/entities/Client';

@Component({
  selector: 'app-client-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    @Input() client : Client|null  = null;
}

import { Component } from '@angular/core';
import Client from '../../entities/Client';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	client = Client.findClient(1);
}

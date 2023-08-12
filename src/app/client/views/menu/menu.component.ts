import { Component } from '@angular/core';
import Client from '../../entities/Client';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    client = Client.findClient(1);
}

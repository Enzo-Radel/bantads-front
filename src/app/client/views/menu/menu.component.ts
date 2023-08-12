import { Component } from '@angular/core';
import Client from '../../entities/Client';
import Account from '../../entities/Account';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    account = Account.findAccount(1);
}

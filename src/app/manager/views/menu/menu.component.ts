import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import Client from 'src/app/entities/Client';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class MenuComponent {
  client = Client.findClient(1);
  clients = Client.getAllClients();

  constructor() { }

  approveClient($event: any, client: Client) {
    $event.preventDefault();
  }

  denyClient($event: any, client: Client) {
    $event.preventDefault();
  }

}

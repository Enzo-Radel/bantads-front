import { Component, OnInit } from '@angular/core';
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
export class MenuComponent implements OnInit{
  clients!: Client[]

  constructor() { }

  ngOnInit(): void {
    // Só para iniciar o bd com alguns clientes
    Client.createClients()
    this.getAllClients()
  }

  async getAllClients() {
    this.clients = await Client.getAllClients()
    console.log(this.clients)
  }

  approveClient($event: any, client: Client) {
    $event.preventDefault()
    Client.addClient(client)
    this.getAllClients() 
  }

  denyClient($event: any, client: Client) {
    $event.preventDefault();
    Client.removeClient(client)
    this.getAllClients()
  }

}

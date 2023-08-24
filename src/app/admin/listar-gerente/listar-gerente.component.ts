import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Gerente } from 'src/app/shared/models/gerente.model';

@Component({
  selector: 'app-listar-gerente',
  templateUrl: './listar-gerente.component.html',
  styleUrls: ['./listar-gerente.component.css']
})
export class ListarGerenteComponent implements OnInit {

  gerentes: Gerente[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.gerentes = this.listarTodos();
  }

  listarTodos(): Gerente[] {
    return this.adminService.listarTodos();
    // return [
    //   new Gerente(1, "Razer", 100, 80, 20),
    //   new Gerente(2, "Bruna", 500, 400, 100),
    //   new Gerente(3, "Guilherme", 600, 500, 100),
    //   new Gerente(4, "Juan", 600, 450, 150)
    // ]
  }

  remover($event: any, gerente: Gerente): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o gerente ${gerente.nome}?`)) {
      this.adminService.remover(gerente.id!);
      this.gerentes = this.listarTodos();
    }
  }
}

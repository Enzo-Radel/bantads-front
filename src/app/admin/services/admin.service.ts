import { Injectable } from '@angular/core';
import { Gerente } from 'src/app/shared/models/gerente.model';

const LS_CHAVE: string = "gerentes";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  listarTodos(): Gerente[] {
    const gerentes = localStorage[LS_CHAVE];
    return gerentes ? JSON.parse(gerentes) : [];
  }

  inserir(gerente: Gerente): void {
    const gerentes = this.listarTodos();
    gerente.id = new Date().getTime();
    gerentes.push(gerente);
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  remover(id: number): void {
    let gerentes: Gerente[] = this.listarTodos();

    gerentes = gerentes.filter(gerente => gerente.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }
}



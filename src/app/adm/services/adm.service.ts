import { Injectable } from '@angular/core';
import Manager from 'src/app/entities/Manager';

const LS_MANAGERS_KEY: string = "managers";


@Injectable({
  providedIn: 'root'
})
export class AdmService {

  constructor() { }

  listAll(): Manager[] {
    const managers = localStorage[LS_MANAGERS_KEY];
    return managers ? JSON.parse(managers) : [];
  }

  insert(manager: Manager): void {

    const managers = this.listAll();

    managers.push(manager);

    localStorage[LS_MANAGERS_KEY] = JSON.stringify(managers);
  }
}

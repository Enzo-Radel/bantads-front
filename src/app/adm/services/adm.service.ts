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

  searchByName(name: string): Manager | undefined {

    const managers: Manager[] = this.listAll();

    return managers.find(manager => manager.name === name);

  }

  update(manager: Manager): void {

    const managers: Manager[] = this.listAll();


    managers.forEach((obj, index, objs) => {
      if (manager.name === obj.name) {
        objs[index] = manager;
      }
    });

    localStorage[LS_MANAGERS_KEY] = JSON.stringify(managers);
  }

}

import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../services/adm.service';
import Manager from 'src/app/entities/Manager';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  constructor(private admService: AdmService) { }

  managers: Manager[] = [];

  ngOnInit(): void {
    this.managers = this.listAll();
  }

  listAll(): Manager[] {
     return this.admService.listAll();
    // return [
    //   new Manager("Razer", "razer@email", "123", "01254256891", "996585", "600", "400", "200"),
    //   new Manager("Razer", "razer@email", "123", "01254256891", "996585", "600", "400", "200"),
    // ]
  }


}

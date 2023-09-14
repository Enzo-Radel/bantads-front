import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Manager from 'src/app/entities/Manager';
import { AdmRoutingModule } from '../../adm-routing.module';
import { AdmService } from '../../services/adm.service';

@Component({
  selector: 'app-insert-manager',
  templateUrl: './insert-manager.component.html',
  styleUrls: ['./insert-manager.component.css']
})
export class InsertManagerComponent implements OnInit {

  @ViewChild('formManager') formManager!: NgForm;

  manager!: Manager;

  constructor(private admService: AdmService,
    private router: Router) { }

  ngOnInit(): void {
    this.manager = new Manager("", "", "", "", "", "", "", "");
  }

  insert(): void {
    if (this.formManager.form.valid) {
      this.admService.insert(this.manager);
      this.router.navigate(["/adm"]);
    }
  }

}

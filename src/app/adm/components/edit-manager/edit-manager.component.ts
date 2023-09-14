import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Manager from 'src/app/entities/Manager';
import { AdmService } from '../../services/adm.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {

  @ViewChild('formManager') formManager!: NgForm;

  manager!: Manager;

  constructor(
    private admService: AdmService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let name = this.route.snapshot.params['name'];

    // Com o nome, obtém o gerente
    const res = this.admService.searchByName(name);

    if (res !== undefined)
      this.manager = res;
    else
      throw new Error("Gerente nao encontrado: id = " + name);
  }

  update(): void {
    if (this.formManager.form.valid) {
      this.admService.update(this.manager);
      this.router.navigate(['/adm']);
    }
  }
}

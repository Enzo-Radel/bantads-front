import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGerenteComponent } from './admin/listar-gerente/listar-gerente.component';
import { InserirGerenteComponent } from './admin/inserir-gerente/inserir-gerente.component';


const routes: Routes = [
  { path: 'gerentes', component: ListarGerenteComponent },
  {
    path: 'gerentes/novo',
    component: InserirGerenteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexAdminComponent } from './Componentes/Admin/index-admin/index-admin.component';
import { MarcaComponent } from './Componentes/Admin/marca/listar/marca.component';
import { MarcaCrearComponent } from './Componentes/Admin/marca/marca-crear/marca-crear.component';
import { IndexComponent } from './Componentes/index/index.component';

const routes: Routes = [
  {path: "indexAdmin", component:IndexAdminComponent},
  {path: "marcaAdmin",component:MarcaComponent},
  {path: "marcaCrearAdmin",component:MarcaCrearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

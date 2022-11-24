import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexAdminComponent } from './Componentes/Admin/index-admin/index-admin.component';
import { DashboardAdminComponent } from './Componentes/Admin/dashboard-admin/dashboard-admin.component';
import { MarcaComponent } from './Componentes/Admin/marca/listar/marca.component';
import { IndexComponent } from './Componentes/index/index.component';
import { MarcaCrearComponent } from './Componentes/Admin/marca/marca-crear/marca-crear.component';
import { TopbarComponent } from './Componentes/topbar/topbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { LogoutModalComponent } from './Componentes/logout-modal/logout-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexAdminComponent,
    DashboardAdminComponent,
    MarcaComponent,
    IndexComponent,
    MarcaCrearComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModalComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

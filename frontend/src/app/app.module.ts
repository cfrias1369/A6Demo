import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListComponent as ProspectListComponent } from './components/prospects/list/list.component';
import { CreateComponent as ProspectCreateComponent } from './components/prospects/create/create.component';
import { EditComponent as ProspectEditComponent } from './components/prospects/edit/edit.component';

import { ListComponent as ClientListComponent } from './components/clients/list/list.component';
import { CreateComponent as ClientCreateComponent } from './components/clients/create/create.component';
import { EditComponent as ClientEditComponent } from './components/clients/edit/edit.component';

import { ProspectService } from './services/prospect.service';
import { ClientService } from './services/client.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  { path: 'prospects/create', component: ProspectCreateComponent },
  { path: 'prospects/edit/:id', component: ProspectEditComponent },
  { path: 'prospects/list', component: ProspectListComponent },
  { path: 'clients/create', component: ClientCreateComponent },
  { path: 'clients/edit/:id', component: ClientEditComponent },
  { path: 'clients/list', component: ClientListComponent },
  { path: '', redirectTo: 'prospects/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProspectListComponent,
    ProspectCreateComponent,
    ProspectEditComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientEditComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [ProspectService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

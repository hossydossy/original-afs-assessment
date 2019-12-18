import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DriversComponent } from './drivers/drivers.component';
import { AuthComponent } from './auth/auth.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, DriversComponent, AuthComponent, DocumentsComponent]
})
export class HomeModule { }
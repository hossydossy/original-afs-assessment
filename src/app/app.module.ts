import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { fakeBackendProvider } from './auth/_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './auth/_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './auth/_login';

@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    appRoutingModule
    ],
  declarations: [ AppComponent, HomeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

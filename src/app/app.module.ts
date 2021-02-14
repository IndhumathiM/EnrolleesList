import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { UsersComponent } from './users/users.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [ 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
  
    MatDialogModule
   
  ],
  declarations: [ 
    AppComponent,
   
    UsersComponent,
    UpdateDialogComponent
  ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ],
  entryComponents: [UpdateDialogComponent]
})
export class AppModule { }

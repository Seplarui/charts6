import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {InputUserDataFormComponent} from './input-user-data-form/input-user-data-form.component';
import {DisplayUserDataComponent} from './display-user-data/display-user-data.component';


const routes: Routes = [
  {
    path:'',
    component: InputUserDataFormComponent
  },
  {
    path:'user/:uid',
    component: DisplayUserDataComponent
  }
];

@NgModule({
  declarations:[
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

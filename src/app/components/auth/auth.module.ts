import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataAccessModule } from '../../store/data-access.module';

const routes: Routes = [
  {path: '', children: [
    {path: '', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]}
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DataAccessModule
  ]
})
export class AuthModule { }

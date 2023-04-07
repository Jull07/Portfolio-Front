import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditskillComponent } from './componentes/skills/editskill.component';
import { NewskillComponent } from './componentes/skills/newskill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
   {path: 'login', component: LoginComponent},
   {path: 'nuevaedu', component: NeweducacionComponent},
   {path: 'editedu/:id', component: EditeducacionComponent },
   {path: 'newskill', component: NewskillComponent},
   {path: 'editskill/:id', component: EditskillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

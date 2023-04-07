import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RedesComponent } from './componentes/redes/redes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { Header2Component } from './componentes/header2/header2.component';

import { SkillsComponent } from './componentes/skills/skills.component';

import { FooterComponent } from './componentes/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditskillComponent } from './componentes/skills/editskill.component';
import { NewskillComponent } from './componentes/skills/newskill.component';



@NgModule({
  declarations: [
    AppComponent,
    RedesComponent,
    HeaderComponent,
    Header2Component,
  
  
    SkillsComponent,
    FooterComponent,
  
    HomeComponent,
    LoginComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditskillComponent,
    NewskillComponent,
],
  imports: [
    BrowserModule,
    
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
 

  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }


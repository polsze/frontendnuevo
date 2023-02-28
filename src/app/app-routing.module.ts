import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from 'src/app/components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from 'src/app/components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from 'src/app/components/educacion/neweducacion.component';
import { EditEducacionComponent } from 'src/app/components/educacion/edit-educacion.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';




const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'nuevaexp', component: NewExperienciaComponent},
    {path:'editexp/:id', component: EditExperienciaComponent},
    {path:'nuevaedu', component: NeweducacionComponent},
    {path:'editedu/:id', component: EditEducacionComponent},
    {path: 'newskill', component: NewSkillComponent},
    {path: 'editskill/:id', component: EditSkillComponent}
  
    

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

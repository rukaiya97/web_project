import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollTableComponent } from './component/enroll-table/enroll-table.component';
import { EnrollComponent } from './component/enroll/enroll.component';
import { EnrolldetailComponent } from './component/enrolldetail/enrolldetail.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { TrainersComponent } from './component/trainers/trainers.component';

const routes: Routes = [


  {path:'navigation',component:NavigationComponent,children:[
   
    {path:'Home',component:HomeComponent},
    {path:'Enroll',component:EnrollComponent},
    {path:'Trainers',component:TrainersComponent},
    {path:'enroll_table', component:EnrollTableComponent},
    {path:'enroll-details', component:EnrolldetailComponent}

  
  ]},
  {path:'',component:LoginComponent},
  {path:'SignUp',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

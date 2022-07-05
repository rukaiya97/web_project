import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { EnrollComponent } from './component/enroll/enroll.component';
import { EnrollTableComponent } from './component/enroll-table/enroll-table.component';
import { TrainersComponent } from './component/trainers/trainers.component';
import { EnrolldetailComponent } from './component/enrolldetail/enrolldetail.component';
import { UpdateComponent } from './component/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavigationComponent,
    HomeComponent,
    EnrollComponent,
    EnrollTableComponent,
    TrainersComponent,
    EnrolldetailComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

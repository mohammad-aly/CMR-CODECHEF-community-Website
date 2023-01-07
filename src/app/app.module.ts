import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavgationComponent } from './navgation/navgation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
 
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { PpComponent } from './pp/pp.component';
import { CountUpModule } from 'ngx-countup';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {MatRippleModule} from '@angular/material/core';

 
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  declarations: [

    AppComponent,
    JoinComponent,
    NavgationComponent,
    HomeComponent,
    FooterComponent,
    PpComponent
  ],
  imports: [
    LoadingBarHttpClientModule,
    LoadingBarModule,FormsModule,
    LoadingBarRouterModule,
    MatSelectModule,CountUpModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRippleModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

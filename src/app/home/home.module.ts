import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { Page1Component } from "./components/page1/page1.component";
import { Page2Component } from "./components/page2/page2.component";
import { Page3Component } from "./components/page3/page3.component";
import { DisplayComponent } from "./components/display/display.component"



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    Page1Component,
    Page2Component,
    Page3Component,
    DisplayComponent
  ]
})
export class HomePageModule {}

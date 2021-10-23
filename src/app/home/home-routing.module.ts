import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

import { Page1Component } from "./components/page1/page1.component";
import { Page2Component } from "./components/page2/page2.component";
import { Page3Component } from "./components/page3/page3.component";
import { DisplayComponent } from "./components/display/display.component"

const routes: Routes = [
  
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '1',
        component: Page1Component,
      },
      {
        path: '2',
        component: Page2Component,
      },
      {
        path: '3',
        component: Page3Component,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

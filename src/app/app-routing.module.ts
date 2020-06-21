import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogCardComponent } from './log-card/log-card.component';


const routes: Routes = [
  {
    path: 'servicelogs',
    component: LogCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

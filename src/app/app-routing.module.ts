import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainComponent } from './main/main.component';
import { DatapoliceComponent } from './datapolice/datapolice.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datapolice', component: DatapoliceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

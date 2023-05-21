import { TrashComponent } from './pages/trash/trash.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'login',
    component:LoginSignupComponent
  },
  {
    path:'reminder',
    component:ReminderComponent
  },
  {
    path:'archive',
    component:ArchiveComponent
  },
  {
    path:'trash',
    component:TrashComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

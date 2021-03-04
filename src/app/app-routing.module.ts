import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contactComponent } from './contact/contact.component';
import { homeComponent } from './home/home.component';
import { notFoundComponent } from './not-found/not-found.component';
import { upworkRedirectComponent } from './redirct/upwork-redirect.component';

const routes: Routes = [
  { path: 'contact', component: contactComponent},
  { path: 'home', component: homeComponent},
  { path: 'upwork', component: upworkRedirectComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: notFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  contactComponent,
  homeComponent,
  notFoundComponent,
  upworkRedirectComponent,
]
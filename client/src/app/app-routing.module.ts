import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoComponent} from "./features/todo/todo.component";
import {AboutComponent} from "./features/about/about.component";
import {HomeComponent} from "./features/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {UserAccountComponent} from "./features/user-account/user-account.component";
import {RegistrationComponent} from "./features/registration/registration.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'account',
    component: UserAccountComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

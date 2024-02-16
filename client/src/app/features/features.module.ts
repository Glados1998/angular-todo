import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {UserAccountComponent} from './user-account/user-account.component';
import {TodoComponent} from './todo/todo.component';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent,
    UserAccountComponent,
    TodoComponent,
  ],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ]
})
export class FeaturesModule {
}
